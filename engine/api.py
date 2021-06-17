from fastapi import FastAPI
import os

app = FastAPI()

@app.get("/")
def read_root():
    return {"Helo": "World!"}

@app.get("/open-explorer/{path_to_open}")
def open_explorer(path_to_open: str):
    os.startfile(path_to_open)
    return f"Opening {path_to_open}"

if __name__ == "__main__":
    import asyncio
    import uvicorn

    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)

    loop.run_until_complete(uvicorn.run(app, host="127.0.0.1", port=7777))