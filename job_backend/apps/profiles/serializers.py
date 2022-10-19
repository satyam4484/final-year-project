from rest_framework import serializers
from drf_writable_nested import WritableNestedModelSerializer 
from rest_framework.serializers import ModelSerializer
from django.contrib.auth import get_user_model
User = get_user_model()
from .models import *

class websiteSerializer(ModelSerializer):
    class Meta:
        model = website
        fields="__all__"


class commonProfileSerializer(ModelSerializer):
    websites = websiteSerializer(many=True)
    class Meta:
        model = commonProfile
        fields = ['headline','profilePic','coverImage','user','websites']
    

class contactSerializer(ModelSerializer):
    class Meta:
        model = contact
        fields = "__all__"
    

class skillSerializer(ModelSerializer):

    class Meta:
        model = skill
        fields = ['id','name']

    def create(self, validated_data):        
        data = skill.objects.get_or_create(**validated_data)
        if(not data[1]):
            return data[0]
        return skill.objects.create(**validated_data)



class userProfileSerializer(ModelSerializer):
    profile = commonProfileSerializer()
    contactDetails = contactSerializer()
    skill = skillSerializer(many=True)
    class Meta:
        model = userProfile
        fields = ['id','firstName','lastName','profile','contactDetails','skill']


class educationSerializer(ModelSerializer):
    class Meta:
        model = education
        fields = "__all__"


class experienceSerializer(ModelSerializer):
    class Meta:
        model = experience
        fields = "__all__"


class projectSerializer(ModelSerializer):
    class Meta:
        model = project
        fields = "__all__"








