from models import AccountIn, AccountOut, AccountOutWithPassword, TreeOut
from .pool import pool
from pydantic import BaseModel


class AccountRepository(BaseModel):
    def get(self, username: str) -> AccountOutWithPassword:
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                    SELECT 
                    user_id, first_name, last_name, email, username, password
                    FROM accounts 
                    WHERE username = %s
                    """,
                    [username]
                )
                account = {}
                for row in db.fetchall():
                    for i, col in enumerate(db.description):
                        account[col.name] = row[i]
                account["hashed_password"] = account["password"]
                del account["password"]


                if not account:
                    return None

                return AccountOutWithPassword(**account)
        

    def create(self, account: AccountIn, hashed_password: str) -> AccountOut:
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                    INSERT INTO accounts
                        (first_name, last_name, email, username, password)
                    VALUES
                        (%s, %s, %s, %s, %s)
                    RETURNING user_id;
                    """,
                    [
                        account.first_name,
                        account.last_name,
                        account.email,
                        account.username,
                        hashed_password,
                    ],
                )
                user_id = result.fetchone()[0]
                old_data = account.dict()
                return AccountOut(user_id=user_id, **old_data)


