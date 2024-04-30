CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT UNIQUE NOT NULL,
    "name" VARCHAR(15),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

CREATE TABLE "Todo" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INTEGER NOT NULL REFERENCES "User"("id"),
    "task" TEXT NOT NULL,

    CONSTRAINT "Todo_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id")
);

CREATE UNIQUE INDEX "Todo_user_text_unique" ON "Todo"("user_id", "task");
