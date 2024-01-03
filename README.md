# PneumoniaAPI

## Testing the API
<br>
1. Post data (image URL and a feedback boolean)
<br>
  https://pneumoniaapi.onrender.com/api/v1/data/imagedata
<br>
  Example of the body (raw JSON): 
  <br>
  {
    "image": "base64_encoded_image_data",
    "option": "yes"
  }

<br><br>

2. Get data from the database
<br>
  https://pneumoniaapi.onrender.com/api/v1/data/alldata
