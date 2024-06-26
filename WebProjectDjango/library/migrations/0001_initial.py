# Generated by Django 5.0.6 on 2024-05-13 15:45

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Author',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('bookImage', models.ImageField(blank=True, null=True, upload_to='images')),
                ('description', models.CharField(max_length=500)),
                ('available', models.BooleanField(default=True)),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='library.author')),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='library.category')),
            ],
        ),
    ]
