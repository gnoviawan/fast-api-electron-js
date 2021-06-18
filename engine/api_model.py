from typing import Optional
from pydantic import BaseModel
from pydantic.schema import model_process_schema

class PathModel(BaseModel):
    path: str
    message: Optional[str]

class HelloModel(BaseModel):
    name: str
    message: Optional[str]
