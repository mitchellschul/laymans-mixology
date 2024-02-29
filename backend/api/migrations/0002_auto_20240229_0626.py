# Generated by Django 3.2.24 on 2024-02-29 06:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='drinkList',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('drinks', models.JSONField()),
            ],
        ),
        migrations.RenameModel(
            old_name='ingedientList',
            new_name='ingredientList',
        ),
        migrations.RenameField(
            model_name='ingredientlist',
            old_name='ingedients',
            new_name='ingredients',
        ),
    ]