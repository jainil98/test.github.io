#!/bin/sh

curl --location --request POST 'https://business-api.tiktok.com/open_api/v1.3/pixel/track/' \
--header 'Access-Token: {access_token}' \
--header 'Content-Type: application/json' \
--data-raw '{
  "test_event_code": "{test_code}",
  "pixel_code": "{pixel_code}",
  "event": "InitiateCheckout",
  "event_id":"1616318632825_357",
  "timestamp": "2020-09-17T19:49:27Z",
  "context": {
    "ad": {
      "callback": "123ATXSfe"
    },
    "page": {
      "url": "http://demo.mywebsite.com/purchase",
      "referrer": "http://demo.mywebsite.com"
    },
    "user": {
      "external_id": "f0e388f53921a51f0bb0fc8a2944109ec188b59172935d8f23020b1614cc44bc",
      "phone_number": "2f9d2b4df907e5c9a7b3434351b55700167b998a83dc479b825096486ffcf4ea",
      "email": "dd6ff77f54e2106661089bae4d40cdb600979bf7edc9eb65c0942ba55c7c2d7f",
      "ttp":"94e2a4j9-h3j5-k2h5-98cc-c84a745mk098"
    },
    "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.109 Safari/537.36",
    "ip": "13.57.97.131"
  },
  "properties": {
    "contents": [
      {
        "price": 8,
        "quantity": 2,
        "content_type": "product_group",
        "content_id": "1077218"
      },
      {
        "price": 30,
        "quantity": 1,
        "content_type": "product_group",
        "content_id": "1197218"
      }
    ],
    "currency": "USD",
    "value": 46.00
  }
}'