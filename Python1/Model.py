# importing tensorflow and Keras for doing ML
from tensorflow.python.keras.layers import Dense
import matplotlib.pyplot as plt
from tensorflow.keras.layers import GlobalAveragePooling2D
from tensorflow.keras import Model
from keras.models import Sequential,Model
from keras.applications import VGG16
from tensorflow.keras.layers import Dense, Dropout, Flatten,Conv2D,MaxPool2D
import numpy as np
from sklearn.metrics import confusion_matrix
import seaborn as sns
from keras_preprocessing.image import ImageDataGenerator
import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '1'

num_classes = 6
batch_size = 32
classes = ['cardboard', 'glass', 'metal', 'paper', 'plastic', 'trash']
train_path = r'F:\אביטל\שנה ב\פרוייקט בינה מלאכותית\AI Project Data\Garbage classification\output'
train_batches = ImageDataGenerator().flow_from_directory(directory=train_path,
                                            classes=classes,
                                            class_mode='categorical',
                                            target_size=(75,75),
                                            batch_size=batch_size,
                                            shuffle=True)

valid_path = r'F:\אביטל\שנה ב\פרוייקט בינה מלאכותית\AI Project Data\Garbage classification\valid'
valid_batches = ImageDataGenerator().flow_from_directory(directory=valid_path,
                                            classes=classes,
                                            class_mode='categorical',
                                            target_size=(75,75),
                                            batch_size=batch_size,
                                            shuffle=True)

test_path = r'F:\אביטל\שנה ב\פרוייקט בינה מלאכותית\AI Project Data\Garbage classification\test'
test_batches = ImageDataGenerator().flow_from_directory(directory=test_path,
                                               classes=classes,
                                               class_mode='categorical',
                                               target_size=(75,75),
                                               batch_size=1,
                                               shuffle=False)

def generate_model():
    model = Sequential()
    #המודל רציף
    model.add(Conv2D(32, (3, 3), activation='relu', padding='same', input_shape=(75, 75, 3)))
    model.add(MaxPool2D(pool_size=2, strides=2))
    model.add(Dropout(0.25))

    model.add(Conv2D(64, (3, 3), activation='relu', padding='same'))
    model.add(MaxPool2D(pool_size=2, strides=2))
    model.add(Dropout(0.25))

    model.add(Flatten())

    model.add(Dense(2048, activation='relu'))
    model.add(Dropout(0.25))
    model.add(Dense(1024, activation='relu'))
    model.add(Dropout(0.25))

    model.add(Dense(num_classes, activation='softmax'))

    return model


def generate_model_vgg16():
    vgg16_model = VGG16()
    model = Sequential()
    for layer in vgg16_model.layers[:-4]:
        model.add(layer)
    for layer in model.layers:
        layer.trainable = False
    transfer_layer = model.get_layer('block5_pool')
    model = Model(inputs=model.input,
                       outputs=transfer_layer.output)
    new_model = Sequential()
    new_model.add(model)

    new_model.add(Flatten())
    new_model.add(Dense(2048, activation='relu'))
    new_model.add(Dropout(0.25))
    new_model.add(Dense(1024, activation='relu'))
    new_model.add(Dropout(0.25))

    new_model.add(Dense(num_classes,activation='softmax'))
    return new_model


def build_vgg16(weights='imagenet', optimizer='adam'):
    # load model
    model = VGG16(weights=weights, include_top=False, input_shape=(75, 75, 3))
    # freeze all layer
    for layer in model.layers:
        layer.trainable = False
    # add new classifier head
    x = GlobalAveragePooling2D()(model.output)
    x = Dense(512, activation='relu')(x)
    x = Dense(512, activation='relu')(x)
    predictions = Dense(num_classes, activation='softmax')(x)
    # instantiate new model
    myModel = Model(inputs=model.input, outputs=predictions)
    # compile model
    myModel.compile(
        loss='categorical_crossentropy',
        optimizer='adam',
        metrics=['accuracy']
    )
    # print parameters
    myModel.summary()
    return myModel

def plot_confusion_matrix(y_true, y_pred, classes):
    # Compute confusion matrix
    cm = confusion_matrix(y_true, y_pred)
    # Plot confusion matrix
    plt.figure(figsize=(8, 6))
    sns.heatmap(cm, annot=True, cmap=plt.cm.Blues, xticklabels=classes, yticklabels=classes)
    plt.xlabel('Predicted labels')
    plt.ylabel('True labels')
    plt.title('Confusion Matrix')
    plt.show()

def train():
    model= build_vgg16()
    model.summary()
    model.compile(loss='categorical_crossentropy',optimizer ='adam',metrics=['accuracy'])
    step_size_train = train_batches.n // train_batches.batch_size
    step_size_valid = valid_batches.n // valid_batches.batch_size

    history = model.fit(train_batches, epochs=10, validation_data=valid_batches,
                        steps_per_epoch=step_size_train,
                        validation_steps=step_size_valid,
                        verbose=1,
                        )

    # Predict classes for test set
    test_steps = test_batches.n // test_batches.batch_size
    test_pred = model.predict(test_batches, steps=test_steps)
    test_pred_classes = np.argmax(test_pred, axis=1)
    test_true_classes = test_batches.classes
    # Plot confusion matrix
    plot_confusion_matrix(test_true_classes, test_pred_classes, classes)
    model.save(r'C:\אביטל\פרויקט בינה מלאכותית\Python')



if __name__ == '__main__':
    train()