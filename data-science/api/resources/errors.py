class InternalServerError(Exception):
    pass

class SchemaValidationError(Exception):
    pass

class ShoesAlreadyExistsError(Exception):
    pass

class UpdatingShoesError(Exception):
    pass

class DeletingShoesError(Exception):
    pass

class ShoesNotExistsError(Exception):
    pass

class UnauthorizedError(Exception):
    pass

errors = {
    "InternalServerError": {
        "message": "Something went wrong",
        "status": 500
    },
     "SchemaValidationError": {
         "message": "Request is missing required fields",
         "status": 400
     },
     "ShoesAlreadyExistsError": {
         "message": "Shoes with given name already exists",
         "status": 400
     },
     "UpdatingShoesError": {
         "message": "Updating shoes added by other is forbidden",
         "status": 403
     },
     "DeletingShoesError": {
         "message": "Deleting shoes added by other is forbidden",
         "status": 403
     },
     "ShoesNotExistsError": {
         "message": "Shoes with given id doesn't exists",
         "status": 400
     },
}
