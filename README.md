# PneumoniaAPI

## Testing the API

1. Post data (image URL and a feedback boolean)

<br><br>

  https://pneumoniaapi.onrender.com/api/v1/data/imagedata
  
<br><br>

  Example of the body (raw JSON): 
  
  <br><br>
  
  {
    "image": "base64_encoded_image_data",
    "option": "yes"
  }
  
<br><br>

3. Get data from the database

<br><br>

  https://pneumoniaapi.onrender.com/api/v1/data/alldata
