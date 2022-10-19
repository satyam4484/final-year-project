# Generated by Django 4.1.1 on 2022-10-19 09:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0003_commonprofile_userprofile_delete_profile'),
    ]

    operations = [
        migrations.AlterField(
            model_name='commonprofile',
            name='headline',
            field=models.CharField(blank=True, max_length=500, null=True),
        ),
        migrations.AlterField(
            model_name='commonprofile',
            name='websites',
            field=models.ManyToManyField(blank=True, null=True, related_name='websites', to='profiles.website'),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='firstName',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='lastName',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]