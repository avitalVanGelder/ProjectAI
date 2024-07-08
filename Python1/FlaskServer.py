from PIL import Image
import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from PIL import Image
import numpy as np
from tensorflow.keras.models import load_model
app = Flask(__name__)
CORS(app)

# Load your trained model
model = load_model(r'C:\אביטל\פרויקט בינה מלאכותית\Python\finalModel\finalModel.h5')  # Load your model file here

# Define your class labels
class_labels = ['cardboard', 'glass', 'metal', 'paper', 'plastic', 'trash']

# Create folders for each class if they don't exist
base_folder = os.path.join(os.getcwd(), "classified_images")
for label in class_labels:
    folder_path = os.path.join(base_folder, label)
    if not os.path.exists(folder_path):
        os.makedirs(folder_path)


def preprocess_image(img, new_size=(75, 75)):

    if img.mode == 'P' or img.mode == 'RGBA':
        img = img.convert('RGB')
    # Resize the image
    resized_img = img.resize(new_size)
    return resized_img


# Route to receive the image from the frontend
@app.route('/upload', methods=['POST'])
def upload_file():
    try:
        if 'photo' not in request.files:
            return jsonify({'error': 'No file part'})
        file = request.files['photo']
        if file.filename == '':
            return jsonify({'error': 'No selected file'})
            # *** Open the uploaded image directly ***
        image = Image.open(file.stream)
        # Classify the image
        res = classify_image(image)

        # Define the target folder based on the classification result
        target_folder = os.path.join(base_folder, res)
        target_path = os.path.join(target_folder, file.filename)

        # *** Save the image to the target folder ***
        image.save(target_path)

        return jsonify({'message': res})
    except Exception as e:
        return jsonify({'error': str(e)})


def classify_image(image):
        model.summary()
        # Preprocess the image
        image = preprocess_image(image)
        numpy_array = np.array(image)
        numpy_array = numpy_array.reshape((1, 75, 75, 3))
        # Perform classification
        prediction = model.predict(numpy_array)
        print(prediction)
        predicted_class_index = np.argmax(prediction)
        print(predicted_class_index)
        predicted_class = class_labels[predicted_class_index]
        print(predicted_class)
        return (predicted_class)


if __name__ == '__main__':
    app.run(debug=True)