from rest_framework.decorators import api_view
from rest_framework.response import Response

from checkStatus.models.test import Test
from checkStatus.models.ping_test import PingTest
from checkStatus.models.ping_test_page import PingTestPage
from checkStatus.serializers.ping_test_page_serializer import PingTestPageSerializer


@api_view(['GET'])
def checkAllUrlOfAWeb(request, testID):
    pingTest = PingTest.objects.get(id=testID)
    
    pingTestPages = PingTestPage.objects.filter(pingTest=pingTest).order_by('-status')
    serializer = PingTestPageSerializer(pingTestPages, many=True)
    
    return Response(serializer.data)