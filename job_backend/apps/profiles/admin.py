from django.contrib import admin
from .models import *
@admin.register(contact)
class contactAdmin(admin.ModelAdmin):
    list_display=['id','mobile','address','birthMonth','birthDay','country','city']

@admin.register(website)
class websiteAdmin(admin.ModelAdmin):
    list_display=['id','name','description','link']

@admin.register(skill)
class skillAdmin(admin.ModelAdmin):
    list_display = ['id','name']

@admin.register(userProfile)
class userProfileAdmin(admin.ModelAdmin):
    list_display = ['id','firstName','lastName','headline','profilePic','gender','coverImage','contactDetails']

@admin.register(education)
class educationAdmin(admin.ModelAdmin):
    list_display=['id','user','school','degree','fieldOfStudy','startdate','enddate','grade','description']

@admin.register(experience)
class experienceAdmin(admin.ModelAdmin):
    list_display=['id','user','role','employementType','companyName','location','startdate','enddate','description']

@admin.register(project)
class projectAdmin(admin.ModelAdmin):
    list_display=['id','user','title','startdate','enddate','projectUrl','description']

