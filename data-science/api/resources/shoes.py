from flask import Response, request
from database.models import Shoes
from flask_restful import Resource
from mongoengine.errors import FieldDoesNotExist, NotUniqueError, DoesNotExist, ValidationError, InvalidQueryError
from resources.errors import SchemaValidationError, ShoesAlreadyExistsError, InternalServerError, \
UpdatingShoesError, DeletingShoesError, ShoesNotExistsError


class ShoesesApi(Resource):
    def get(self):
        shoeses = Shoes.objects.to_json()
        return Response(shoeses, mimetype="application/json", status=200)

    def post(self):
        try:
            body = request.get_json()
            shoes = Shoes(**body)
            shoes.save()
            id = shoes.id
            return {'id': str(id)}, 200
        except (FieldDoesNotExist, ValidationError):
            raise SchemaValidationError
        except NotUniqueError:
            raise ShoesAlreadyExistsError
        except Exception as e:
            raise InternalServerError


class ShoesApi(Resource):
    def put(self, id):
        try:
            body = request.get_json()
            Shoes.objects.get(id=id).update(**body)
            return '', 200
        except InvalidQueryError:
            raise SchemaValidationError
        except DoesNotExist:
            raise UpdatingShoesError
        except Exception:
            raise InternalServerError       
    
    def delete(self, id):
        try:
            shoes = Shoes.objects.get(id=id)
            shoes.delete()
            return '', 200
        except DoesNotExist:
            raise DeletingShoesError
        except Exception:
            raise InternalServerError

    def get(self, id):
        try:
            shoeses = Shoes.objects.get(id=id).to_json()
            return Response(shoeses, mimetype="application/json", status=200)
        except DoesNotExist:
            raise ShoesNotExistsError
        except Exception:
            raise InternalServerError
