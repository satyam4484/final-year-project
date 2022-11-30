from rest_framework.serializers import ModelSerializer
from .models import *
from apps.profiles.serializers import skillSerializer
from drf_writable_nested import WritableNestedModelSerializer 

class organizationSerializer(ModelSerializer):
    class Meta:
        model = organization
        fields=['id','companyName','industry','specialties','companyLogo','companyCover','website']


class jobSerializer(WritableNestedModelSerializer,ModelSerializer):
    company = organizationSerializer(read_only=True)
    skillSet = skillSerializer(many=True)
    class Meta:
        model = job
        fields=['id','role','location','jobType','description','company','skillSet']