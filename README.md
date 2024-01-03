# PneumoniaAPI

## Testing the API

1. Post data (image URL and a feedback boolean)

    https://pneumoniaapi.onrender.com/api/v1/data/imagedata
  
    Example of the body (raw JSON): 
    
    {
      "image": "base64_encoded_image_data",
      "option": "yes"
    }


2. Get data from the database

    https://pneumoniaapi.onrender.com/api/v1/data/alldata
