# Generated by Django 4.1.1 on 2022-11-19 08:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('organization', '0004_alter_organization_website'),
    ]

    operations = [
        migrations.AlterField(
            model_name='organization',
            name='website',
            field=models.URLField(),
        ),
    ]
