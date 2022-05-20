from rest_framework import serializers
from checkStatus.models.test import Test
from .page_type_serializer import PageTypeSerializer
from .ping_test_serializer import PingTestSerializer

class TestSerializer(serializers.ModelSerializer):
    testPing = PingTestSerializer(many=True, read_only=True)
    class Meta:
        model = Test
        fields = ('name', 'testPing')

    