
from rest_framework.decorators import api_view
from rest_framework.permissions import *
from rest_framework.response import Response
from .serializers import *
from .models import *
from apps.accounts.views import content


@api_view(['GET','PATCH'])
def userProfileView(request):
    if request.method == "GET":
        try:
            cprofile = commonProfile.objects.get(user = request.user)
            uProfile = userProfile.objects.get(profile = cprofile)
            serializer = userProfileSerializer(uProfile,context={"request": request})
            return content(False,"","",serializer.data)
            
        except Exception as e:
            return content(True,str(e),"Error Occured in getting user profile")
    else:
        try:
            data = request.data
            cprofile = commonProfile.objects.get(user = request.user)
            uProfile = userProfile.objects.get(profile = cprofile)
            serializer = userProfileSerializer(instance=uProfile,data=data,partial=True,context={"request": request})
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return content(False,"","",serializer.data)
            else:
                return content(True,"Error","Error occured in updating profile",serializer.errors)

        except Exception as e:
            return content(True,str(e),"Error Occured in updating user profile")

@api_view(['POST','PATCH'])
def contactView(request):
    if request.method == "POST":
        try:
            data = request.data 
            serializer = contactSerializer(data = data)
            if serializer.is_valid():
                serializer.save()
                user = userProfile.objects.get(profile__user = request.user)
                conc = contact.objects.get(mobile = data['mobile'])
                user.contactDetails = conc 
                user.save()
                return content(False,"","",serializer.data)
            else:
                return content(True,"Error","Error Occured in creating contact",serializer.errors)
        except Exception as e:
            return content(True,str(e),"Error Occured in creating contact")
    else:
        try:
            data = request.data
            conc = contact.objects.get(id = data['id'])
            serializer = contactSerializer(instance=conc,data =data,partial=True)
            if serializer.is_valid():
                serializer.save()
                return content(False,"","",serializer.data)
            else:
                return content(True,"Error","Error Occured in updating contact",serializer.errors)
        except Exception as e:
            return content(True,str(e),"Error Occured in creating contact")

@api_view(['POST','PATCH','DELETE'])
def websiteView(request):
    if request.method == "POST":
        try:
            data = request.data
            serializer = websiteSerializer(data = data)
            if serializer.is_valid():
                serializer.save()
                web = website.objects.get(id = serializer.data['id'])
                profile = commonProfile.objects.get(user = request.user)
                profile.websites.add(web)
                profile.save()
                return content(False,"","",serializer.data)
            return content(False,"Error","Error Occured in adding website",serializer.errors)
        except Exception as e:
            return content(True,str(e),"Error Occured in deleting websites ")
    elif request.method == "PATCH":
        try:
            data = request.data
            web = website.objects.get(id = data['id'])
            serializer = websiteSerializer(instance=web,data = data,partial = True)
            if serializer.is_valid():
                serializer.save()
                return content(False,"","",serializer.data)
            return content(True,"Error","Error Occured in updating website",serializer.errors)
        except Exception as e:
            return content(True,str(e),"Error Occured in updating websited")
    else :
        try:
            site = website.objects.get(id= request.data['id'])
            site.delete()
            return content(False,"","website deleted successfully")
        except Exception as e:
            return content(True,str(e),"Error Occured in deleting websites ")
        



@api_view(['GET','POST','DELETE'])
# @permission_classes([AllowAny])
def setSkill(request,id=None):
    if request.method == "GET":
        try:
            user = userProfile.objects.get(profile__user = request.user)
            serializer = skillSerializer(user.skill,many=True)
            return content(False,"","",serializer.data)
        except Exception as e:
            return content(True,str(e),"Error Occured in getting skills")
    elif request.method == "POST":
        try:
            skills = request.data['skills']
            for val in skills:
                serializer = skillSerializer(data=val,context={"request": request})
                if serializer.is_valid():
                    serializer.save()
                    sk = skill.objects.get(pk = serializer.data['id'])
                    user = userProfile.objects.get(profile__user = request.user)
                    if(not user.skill.filter(name = serializer.data['name'])) :
                        user.skill.add(sk)
                        user.save()

            user = userProfile.objects.get(profile__user = request.user)     
            serializer = skillSerializer(user.skill,many=True)
            return content(False,"","",serializer.data)
        except Exception as e:
            return content(True,str(e),"Error occured in creating skill")
    elif request.method == "DELETE":
        
        try:
            if id:
                user = userProfile.objects.get(profile__user = request.user)
                if(user.skill.filter(id = id)) :
                    sk = skill.objects.get(id = id)
                    user.skill.remove(sk)
                    return content(False,"skill removed","")
                else:
                    return content(True,"Skill doest not exist","")
            return content(True,"Please Call a valid Api","Error Occured in deleting skills")
        except Exception as e:
            return content(True,str(e),"Error Occured in deleting skills")
    