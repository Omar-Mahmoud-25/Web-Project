# Generated by Django 5.0.6 on 2024-05-17 11:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('library', '0005_user'),
    ]

    operations = [
        migrations.CreateModel(
            name='usser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=20)),
                ('password', models.CharField(max_length=16)),
                ('email', models.EmailField(max_length=30)),
                ('isAdmin', models.BooleanField(default=False)),
            ],
        ),
        migrations.DeleteModel(
            name='User',
        ),
    ]