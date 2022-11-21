from rest_framework import serializers
from .models import organization


class organizationSerializer(serializers.ModelSerializer):
    class Meta:
        model = organization
        fields=['id','companyName','industry','specialties','companyLogo','companyCover','website']


