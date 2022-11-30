# Generated by Django 4.1.1 on 2022-11-30 04:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0004_userprofile_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='gender',
            field=models.CharField(default='male', max_length=15),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='userprofile',
            name='resume',
            field=models.FileField(blank=True, null=True, upload_to='resume/'),
        ),
    ]
