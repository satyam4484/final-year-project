from django.contrib import admin
from .models import *

# Register your models here.

@admin.register(organization)
class organizationAdmin(admin.ModelAdmin):
    list_display = ['id','company','companyName','companyLogo','companyCover','website','industry','specialties']
    
@admin.register(job)
class JobAdmin(admin.ModelAdmin):
    list_display = ['id','role','location','jobType','company']