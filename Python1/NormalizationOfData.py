from PIL import Image
import os

def resize_images(input_folder, output_folder, new_size=(75, 75)):
    # Create the output folder if it doesn't exist
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)
    # List all files in the input folder
    files = os.listdir(input_folder)
    # Loop through each file
    for file in files:
        # Check if the file is an image (you may want to improve this check)
        if file.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.jpeg')):
            # Open the image
            with Image.open(os.path.join(input_folder, file)) as img:
                # Convert image to RGB mode if it's in Palette mode
                if img.mode == 'P' or img.mode == 'RGBA':
                    img = img.convert('RGB')
                # Resize the image
                resized_img = img.resize(new_size)
                # Save the resized image to the output folder
                resized_img.save(os.path.join(output_folder, file))



# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    # Example usage:
    # input_folder = r'F:\אביטל\שנה ב\פרוייקט בינה מלאכותית\AI Project Data\Garbage classification\Train\cardboard'
    # output_folder = r'F:\אביטל\שנה ב\פרוייקט בינה מלאכותית\AI Project Data\Garbage classification\output\cardboard'
    # input_folder = r'F:\אביטל\שנה ב\פרוייקט בינה מלאכותית\AI Project Data\Garbage classification\Train\glass'
    # output_folder = r'F:\אביטל\שנה ב\פרוייקט בינה מלאכותית\AI Project Data\Garbage classification\output\glass'
    # input_folder = r'F:\אביטל\שנה ב\פרוייקט בינה מלאכותית\AI Project Data\Garbage classification\Train\metal'
    # output_folder = r'F:\אביטל\שנה ב\פרוייקט בינה מלאכותית\AI Project Data\Garbage classification\output\metal'
    # input_folder = r'F:\אביטל\שנה ב\פרוייקט בינה מלאכותית\AI Project Data\Garbage classification\Train\paper'
    # output_folder = r'F:\אביטל\שנה ב\פרוייקט בינה מלאכותית\AI Project Data\Garbage classification\output\paper'
    # input_folder = r'F:\אביטל\שנה ב\פרוייקט בינה מלאכותית\AI Project Data\Garbage classification\Train\plastic'
    # output_folder = r'F:\אביטל\שנה ב\פרוייקט בינה מלאכותית\AI Project Data\Garbage classification\output\plastic'
    # input_folder = r'F:\אביטל\שנה ב\פרוייקט בינה מלאכותית\AI Project Data\Garbage classification\Train\trash'
    # output_folder = r'F:\אביטל\שנה ב\פרוייקט בינה מלאכותית\AI Project Data\Garbage classification\output\trash'
    # resize_images(input_folder, output_folder)
    print('hi')


