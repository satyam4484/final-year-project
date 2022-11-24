from rest_framework.decorators import api_view
from rest_framework.permissions import *
from .serializers import *
from .models import *
from apps.accounts.views import content

@api_view(['GET','POST','PATCH','DELETE'])
def projectView(request,id=None):
    if request.method == 'GET':
        try:
            edu = project.objects.filter(user = request.user)
            serializer = projectSerializer(edu,many=True)
            return content(False,"","",serializer.data)
        except Exception as e:
            return content(True,str(e),"getting project")
    elif request.method == "POST":
        try:
            serializer =projectSerializer(data = request.data)
            if serializer.is_valid():
                serializer.save(user = request.user)
                return content(False,"","",serializer.data)
            raise Exception(serializer.errors)
        except Exception as e:
            return content(True,str(e),"adding project")
    elif request.method == "PATCH":
        try:
            if id:
                edu = project.objects.get(id = id)
                serializer = projectSerializer(instance=edu,data=request.data,partial=True)
                if serializer.is_valid(raise_exception=True):
                    serializer.save(user=request.user)
                    return content(False,"","",serializer.data)
                raise Exception(serializer.errors)
            raise Exception("Select a valid project to update")
        except Exception as e:
            return content(True,str(e),"updating project")
    else:
        try:
            if not id or not project.objects.filter(id=id):
                raise Exception("experience details not found")
            
            edu = project.objects.get(id = id)
            edu.delete()
            return content(False,"project deleted")
        except Exception as e:
            return content(True,str(e),"deleting project")


# experience details 
@api_view(['GET','POST','PATCH','DELETE'])
def experienceView(request,id=None):
    if request.method == 'GET':
        try:
            edu = experience.objects.filter(user = request.user)
            serializer = experienceSerializer(edu,many=True)
            return content(False,"","",serializer.data)
        except Exception as e:
            return content(True,str(e),"getting experience")
    elif request.method == "POST":
        try:
            serializer =experienceSerializer(data = request.data)
            if serializer.is_valid():
                serializer.save(user = request.user)
                return content(False,"","",serializer.data)
            raise Exception(serializer.errors)
        except Exception as e:
            return content(True,str(e),"adding experience")
    elif request.method == "PATCH":
        try:
            if id:
                edu = experience.objects.get(id = id)
                serializer = experienceSerializer(instance=edu,data=request.data,partial=True)
                if serializer.is_valid(raise_exception=True):
                    serializer.save(user=request.user)
                    return content(False,"","",serializer.data)
                raise Exception(serializer.errors)
            raise Exception("Select a valid experience to update")
        except Exception as e:
            return content(True,str(e),"updating experience")
    else:
        try:
            if not id or not experience.objects.filter(id=id):
                raise Exception("experience details not found")
            
            edu = experience.objects.get(id = id)
            edu.delete()
            return content(False,"experience deleted")
        except Exception as e:
            return content(True,str(e),"deleting experience")



# education details
@api_view(['GET','POST','PATCH','DELETE'])
def educationView(request,id=None):
    if request.method == 'GET':
        try:
            edu = education.objects.filter(user = request.user)
            serializer = educationSerializer(edu,many=True)
            return content(False,"","",serializer.data)
        except Exception as e:
            return content(True,str(e),"getting education")
    elif request.method == "POST":
        try:
            serializer =educationSerializer(data = request.data)
            if serializer.is_valid():
                serializer.save(user = request.user)
                return content(False,"","",serializer.data)
            raise Exception(serializer.errors)
        except Exception as e:
            return content(True,str(e),"getting education")
    elif request.method == "PATCH":
        try:
            if id:
                edu = education.objects.get(id = id)
                serializer = educationSerializer(instance=edu,data=request.data,partial=True)
                if serializer.is_valid(raise_exception=True):
                    serializer.save(user=request.user)
                    return content(False,"","",serializer.data)
                raise Exception(serializer.errors)
            raise Exception("Select a valid Education to update")
        except Exception as e:
            return content(True,str(e),"getting education")
    else:
        try:
            if not id or not education.objects.filter(id=id):
                raise Exception("Education details not found")
            
            edu = education.objects.get(id = id)
            edu.delete()
            return content(False,"Education deleted")

        except Exception as e:
            return content(True,str(e),"getting education")

# user profile data 

''''
try:
    i
except Exception as e:
    return content
'''
@api_view(['GET','POST','PATCH'])
def userProfileView(request):
    if request.method == "GET":
        try:
            user= request.user
            profile = userProfile.objects.get(user = user)
            serializer = userProfileSerializer(profile,context={"request": request})
            return content(False,"","",serializer.data)  
        except Exception as e:
            return content(True,str(e),"Error Occured in getting user prxofile")
    elif request.method == "POST":
        try:
            data = request.data 
            serializer = userProfileSerializer(data = data,context={"request": request})
            if serializer.is_valid(raise_exception=True):
                serializer.save(user = request.user)
                return content(False,"","",serializer.data)
        except Exception as e:
            return content(True,str(e),"adding userprofile")
    else:
        try:
            data = request.data
            Profile = userProfile.objects.get(user = request.user)
            serializer = userProfileSerializer(instance=Profile,data=data,partial=True,context={"request": request})
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return content(False,"","",serializer.data)
            raise Exception(serializer.errors)
        except Exception as e:
            return content(True,str(e),"Error Occured in updating user profile")


# contact functions
@api_view(['GET','POST','PATCH'])
def contactView(request):
    if request.method == "GET":
        try:
            contact  = userProfile.objects.get(user = request.user) 
            serializer = contactSerializer(contact.contactDetails)
            return content(True,"","",serializer.data)
        except Exception as e:
            return content(True,str(e),"Contact details")
    elif request.method == "POST":
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


# websites  

#website view need to be changed
@api_view(['GET','POST','PATCH','DELETE'])
def websiteView(request,id=None):
    if request.method == "GET":
        try:
            profile = userProfile.objects.get(user = request.user)
            serializer = websiteSerializer(profile.websites,many=True,context={"request": request})
            return content(False,"","",serializer.data)
        except Exception as e:
            return content(True,str(e),"getting website")
    elif request.method == "POST":
        try:
            data = request.data
            serializer = websiteSerializer(data = data)
            if serializer.is_valid():
                serializer.save()
                web = website.objects.get(id = serializer.data['id'])
                profile = userProfile.objects.get(user = request.user)
                profile.websites.add(web)
                profile.save()
                return content(False,"","",serializer.data)
            raise Exception(serializer.errors)
        except Exception as e:
            return content(True,str(e),"Error Occured in deleting websites ")
    elif request.method == "PATCH":
        try:
            if id:
                web = website.objects.get(id =id)
                serializer = websiteSerializer(instance=web,data = data,partial = True)
                if serializer.is_valid():
                    serializer.save()
                    return content(False,"","",serializer.data)
                else:
                    return content(True,serializer.errors)
            return content(True,"Error","Error Occured in updating website","Enter a valid url")
        except Exception as e:
            return content(True,str(e),"Error Occured in updating websited")
    else :
        try:
            if id : 
                site = website.objects.get(id= id)
                site.delete()
                return content(False,"website deleted successfully",)
            raise Exception("Enter a valid Id")
        except Exception as e:
            return content(True,str(e),"Error Occured in deleting websites ")
        

# skills
@api_view(['GET','POST','DELETE'])
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
            raise Exception("Enter a valid data")
        except Exception as e:
            return content(True,str(e),"Error Occured in deleting skills")
    
