from rest_framework.decorators import api_view,permission_classes
from .serializers import organizationSerializer
from .models import *
from apps.accounts.views import content
# Create your views here.

@api_view(['GET','POST','PATCH'])
def organizationView(request,id=None):
    if request.method == "GET":
        try:
            user = request.user
            company = organization.objects.get(company = user)
            serializer = organizationSerializer(company,context={"request": request})
            return content(False,"","",serializer.data)
        except Exception as e:
            return content(True,str(e),"Getting Oraganization")
    elif request.method == "POST":
        try:
            user = request.user
            data = request.data 
            serializer = organizationSerializer(data=data,context={"request": request})
            if serializer.is_valid(raise_exception=True):
                serializer.save(company = user)
                return content(False,"","",serializer.data)
            raise Exception(serializer.errors)
        except Exception as e:
            return content(True,str(e),"Adding Organization")
    else :
        try:
            if id:
                org = organization.objects.get(id=id)
                data = request.data 
                serializer = organizationSerializer(data = data,instance=org,partial = True,context={"request": request})
                if serializer.is_valid():
                    serializer.save()
                    return content(False,"","",serializer.data)
                raise Exception(serializer.errors)
            raise Exception("Organization does not exist")
        except Exception as e:
            return content(True,str(e),"Updating Organization")
