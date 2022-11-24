from django.contrib import admin
from .models import User

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display=['id','email','usertype','isAdmin','isActive',]

# @admin.register(commonProfile)
# class commonProfileAdmin(admin.ModelAdmin):
#     list_display = ['id','user','headline','profilePic','coverImage']
    

