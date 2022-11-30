from rest_framework.decorators import api_view
from .serializers import *
from .models import *
from apps.accounts.views import content


def infinite_jobs(request):
    limit = request.GET.get('limit')
    offset = request.GET.get('offset')
    return job.objects.all()[int(offset):int(offset)+int(limit)]


@api_view(['GET','POST','PATCH','DELETE'])
def jobView(request,id=None):
    if request.method == "GET":
        try:
            if id:
                jb = job.objects.get(id=id)
                serializer = jobSerializer(jb,context={"request": request})
                return content(False,"","",serializer.data)
            jb = infinite_jobs(request)
            serializer = jobSerializer(jb,many=True,context={"request": request})
            return content(False,"","",serializer.data)
        except Exception as e:
            return content(True,str(e),"Getting jobs")
    elif request.method == "POST":
        try:
            data = request.data
            serializer = jobSerializer(data=data,context={'request':request})
            if serializer.is_valid(raise_exception=True):
                org = organization.objects.get(company = request.user)
                
                serializer.save(company=org)
                return content(False,"","",serializer.data)
            raise Exception(serializer.errors)
        except Exception as e:
            return content(True,str(e),"adding jobs")
    elif request.method == "PATCH":
        try:
            if id:
                jb = job.objects.get(id = id)
                serializer = jobSerializer(data=request.data,instance=jb,partial=True,context={'request':request})
                if serializer.is_valid(raise_exception=True):
                    serializer.save()
                    return content(False,"","",serializer.data)
                raise Exception(serializer.errors)
            raise Exception("Job Not Found")
        except Exception as e:
            return content(True,str(e),"Getting jobs")
    else:
        try:
            if id:
                jb = job.objects.get(id=id)
                jb.delete()
                return content(False,"Job deleted Successfully")
            raise Exception("Job Not Found")
        except Exception as e:
            return content(True,str(e),"Getting jobs")

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
