from rest_framework.decorators import api_view,permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from .serializers import UserSerializer
from django.contrib.auth import get_user_model
User = get_user_model()


def content(error,message,extraMessage,data=[]):
    return Response({"error":error,"message":message,"additionalMessage":extraMessage,"data":data});

@api_view(['GET'])
def getUser(request):
    try:
        user = request.user
        serializer = UserSerializer(user,context={"request": request})
        return content(False,'','',serializer.data)
    except Exception as e:
        return content(True,str(e),'Error Occured in getting user data ')

