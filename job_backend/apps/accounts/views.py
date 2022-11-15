from rest_framework.decorators import api_view,permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

from apps.organization.models import organization
from .serializers import UserSerializer
from django.contrib.auth import get_user_model
User = get_user_model()
from apps.profiles.models import *

def content(error,message,extraMessage="",data=[]):
    newmsg =''
    if(extraMessage) :
        newmsg = f'Error Occured in {extraMessage} !!!'

    return Response({"error":error,"message":message,"additionalMessage":newmsg,"data":data})

@api_view(['GET'])
def getUser(request):
    try:
        user = User.objects.get(email = request.user)
        serializer = UserSerializer(user)
        return content(False,'','',serializer.data)
    except Exception as e:
        return content(True,str(e),'getting user')
    
@api_view(['POST'])
@permission_classes([AllowAny])
def  validateEmail(request):
    try:
        email = request.data['email']
        if(User.objects.filter(email = email)):
            return content(True,"Email has been Already Taken")
        return content(False,"")
    except Exception as e:
        return content(True,str(e),"Error Occured in validating email")

@api_view(['POST'])
@permission_classes([AllowAny])
def createUser(request):
    try:
        data = request.data
        password = data['password']
        user = User.objects.create(email =data['email'],usertype=data['usertype'])
        user.set_password(password)
        user.save()
        if User.objects.filter(email = data['email']):
            user = User.objects.get(email = data['email'])
            
            if user.usertype == 1:
                profile = commonProfile.objects.get_or_create(user=user)[0]
                userProfile.objects.create(profile=profile)
            # elif user.usertype == 1:
                
            serializer = UserSerializer(user,context={"request": request})
            return content(False,'Account Created Successfully','',serializer.data)
        return content(True,'Something went wrong try again','Error occurred in getting creating user') 
    except Exception as e:
        return content(True,str(e),'Error occurred in getting creating user')

# @api_view(['GET'])
# def userActions(request):
#     if request.method == "GET":
#         try:
#             user = request.user
#             serializer = UserSerializer(user,context={"request": request})
#             return content(False,'','',serializer.data)
#         except Exception as e:
#             return content(True,str(e),'Error Occured in getting user data ')
#     elif request.method =="PATCH":
#         try:
#             data = request.data 
#             user = User.objects.get(email = request.user)
#             serializer = UserSerializer(data=data,instance=user)
#             if serializer.is_valid():
#                 serializer.save()
#                 return content(False,'Profile Updated Successfully','',serializer.data)
#             else:
#                 return content(True,str(serializer.errors),'Error occurred in updating user proile')
#         except Exception as e:
#             return content(True,str(e),'Error Occured in updating user profile')