# Spatial Filtering



## Introduction to  Smoothing & Sharpening Functions

Smoothing and sharpening function use the pixels in an N x N neighbourhood about each pixel to modify an image. For both smoothing and sharpening filters the larger the N x N neighbourhood the stronger the smoothing or sharpening effect. Smoothing and sharpening function can be either non-adaptive or adaptive to local statistics found in each N x N neighbourhood of an image. 



### Smoothing Spatial Filter

Smoothing filter is used for blurring and noise reduction in the image. Blurring is pre-processing steps for removal of small details and Noise Reduction is accomplished by blurring.

**Types of Smoothing Spatial Filter:**

 1. Linear Filter(Mean Filter)

 2. Order Statistics (Non-linear) filter 

    

#### Mean Filter

Linear spatial filter is simply the average of the pixels contained in the neighbourhood of the filter mask. The idea is replacing the value of every pixel in an image by the average of the grey levels in the neighbourhood define by the filter mask.

Types of Mean filters:

##### Averaging filter

It is used in reduction of the detail in image. All coefficients are equal.



CV2 Implementation:

This is done by convolving the image with a normalized box filter. It simply takes the average of all the pixels under kernel area and replaces the central element with this average. This is done by the function **cv2.blur()** or **cv2.boxFilter()**. Check the docs for more details about the kernel. We should specify the width and height of kernel. 



```python

import cv2
import numpy as np
from matplotlib import pyplot as plt

img = cv2.imread('opencv_logo.png')

blur = cv2.blur(img,(5,5))

plt.subplot(121),plt.imshow(img),plt.title('Original')
plt.xticks([]), plt.yticks([])
plt.subplot(122),plt.imshow(blur),plt.title('Blurred')
plt.xticks([]), plt.yticks([])
plt.show()

```

Result:



![Blurcv](https://opencv-python-tutroals.readthedocs.io/en/latest/_images/blur.jpg)



##### **Weighted averaging filter** 

In this, pixels are multiplied by different coefficients. Centre pixel is multiplied by a higher value than average filter.



```python

# import the pillow modules

from PIL import Image

from PIL import ImageFilter

 

# Create an Image Object

image = Image.open("./lamp.jpg")

 

# Apply SMOOTH filters

smoothenedImage = image.filter(ImageFilter.SMOOTH)

moreSmoothenedImage = image.filter(ImageFilter.SMOOTH_MORE)

 

# Display the original image and the smoothened Images

image.show()

smoothenedImage.show()

moreSmoothenedImage.show()
```



Output:



Before applying smooth filter:



![](https://pythontic.com/before_smooth_filter.jpg)



After applying Smoothing filter:



![AfterSmoothing](https://pythontic.com/after_smooth_filter.jpg)		

​	 

####  Order Statistics Filter

It is based on the ordering the pixels contained in the image area encompassed by the filter. It replaces the value of the centre pixel with the value determined by the ranking result. Edges are better preserved in this filtering.

Types of Order statistics filter:

##### Minimum filter

- 0th percentile filter is the minimum filter. The value of the centre is replaced by the smallest value in the window.

- When the minimum filter is applied to a digital image it **picks up the minimum value** of the neighbourhood pixel window and assigns it to the current pixel. A pixel with the minimum value is the darkest among the pixels present in the pixel window. 

- The dark values present in an image are enhanced by the **minimum filter**.

- Minimum filter is also called as a **dilation filter**. When minimum filter is applied the object boundaries present in an image are extended. 

- The minimum filter is one of the **morphological filters**. The other morphological filters include **maximum filter** and the median filter.

- The minimum filter removes any positive outlier noise present in a digital image.

  

```python
# -----Python example program for applying minimum filter to a Digital Image-----

 

# import the required PIL Modules

from PIL import Image
from PIL import ImageFilter


imageFilePath       = "./droplets.jpg";


# Create an image object from a file

imageInstance = Image.open(imageFilePath);

originalImage.show();

 

# Apply minimum filter twice to the image

minFilter1x   = imageInstance.filter(ImageFilter.MinFilter);

minFilter1x.show();


```

Output:



Before applying minimum filter:



![](https://pythontic.com/BeforeApplyingMinimumFilter.png)



After applying minimum filter:



![](https://pythontic.com/AfterApplyingMinimumFilter_1x.png)



##### Maximum filter

- 100th percentile filter is the maximum filter. The value of the centre is replaced by the largest value in the window.
- The maximum filter replaces each pixel value of a Digital Image with the maximum value(i.e., the value of the brightest pixel) of its neighbourhood pixel window. It is the opposite of what the minimum filter does to an Image.
- Applying the maximum filter removes the negative outlier noise present in a Digital Image.
- When a maximum filter is applied, the darker objects present in the image are eroded. This way maximum filter is called an erosion filter. With respect to the lighter pixels, some call this as a dilation filter.
- To be clear, brighter objects are dilated and the darker objects are eroded upon applying a maximum filter to a Digital Image.

```python

#----- Python example program for applying a maximum filter to a digital image -----
from PIL import Image
from PIL import ImageFilter

# Method to apply the filter
def applyMaximumFilter(image):
    return image.filter(ImageFilter.MaxFilter);

# Load the image
imagePath   = "./raindrops.jpg";
imageObject = Image.open(imagePath);

# Apply maximum filter
filterApplied = imageObject;
for i in range(0, 10):
    print(i);
    filterApplied = applyMaximumFilter(filterApplied);

# Display images
imageObject.show();
filterApplied.show();
```

Output:

Before applying the maximum filter to the Digital Image using Python and Pillow:

![https://pythontic.com/Before_Applying_MaxFilter.png](https://pythontic.com/Before_Applying_MaxFilter.png)



After applying the maximum filter 10x times to the Digital Image using Python and Pillow:

![https://pythontic.com/After_Applying_MaxFilter.png](https://pythontic.com/After_Applying_MaxFilter.png)



##### Median filter

- Each pixel in the image is considered. First neighbouring pixels are sorted and original values of the pixel is replaced by the median of the list.

- A **median filter** is an image filter that works on the **spatial domain** of the image.

- Median filter is one of the smoothening filters and it removes **speckle noise** and **impulsive noise** from the image.

- The important characteristic of the median filter is that **it also preserves the edges present in the image**.

- As the median filter is applied onto an image, each pixel is replaced with the **median value** of its neighbours. The current pixel value as well is included in the median calculation.

  

```python
from PIL import Image
from PIL import ImageFilter


imageObject = Image.open("./tower.jpg");

imageObject.show();
 

# Apply median filter

medianFilter1X = imageObject.filter(ImageFilter.MedianFilter);

medianFilter1X.show();

```



Output:



Before applying median filter:



![https://pythontic.com/Before_Applying_Median_Filter.png](https://pythontic.com/Before_Applying_Median_Filter.png)



After applying median filter:



![https://pythontic.com/After_Applying_Median_Filter_1x.png](https://pythontic.com/After_Applying_Median_Filter_1x.png)



### **Sharpening Spatial Filter**

It is also known as derivative filter. The purpose of the sharpening spatial filter is just the opposite of the smoothing spatial filter. Its main focus in on the removal of blurring and highlight the edges. It is based on the first and second order derivative.

#### 	**First order derivative**

- Must be zero in flat segments.

- Must be non zero at the onset of a grey level step.

- Must be non zero along ramps.

  

  First order derivative in 1-D is given by:

  

  ```f' = f(x+1) - f(x)```

#### **Second order derivative**

- Must be zero in flat areas.

- Must be zero at the onset and end of a ramp.

- Must be zero along ramps.

  

  Second order derivative in 1-D is given by:

  

  ```f'' = f(x+1) + f(x-1) - 2f(x)```

#### Example

```python

from PIL import Image
from PIL import ImageFilter

# Open an already existing image
imageObject = Image.open("./MountainsAndOcean.jpg");
imageObject.show();

# Apply sharp filter
sharpened1 = imageObject.filter(ImageFilter.SHARPEN);
sharpened2 = sharpened1.filter(ImageFilter.SHARPEN);

# Show the sharpened images
sharpened1.show();
sharpened2.show();

```

Output:

Original Image:

![https://pythontic.com/Original_Input_Sharpening_Image_Filter.png](https://pythontic.com/Original_Input_Sharpening_Image_Filter.png)



Image after applying the Pillow's ImageFilter.SHARPEN filter once:

![https://pythontic.com/Sharpen_Filter_Applied_Once.png](https://pythontic.com/Sharpen_Filter_Applied_Once.png)



Image after applying the Pillow's ImageFilter.SHARPEN filter twice:



![https://pythontic.com/Sharpen_Filter_Applied_Twice.png](https://pythontic.com/Sharpen_Filter_Applied_Twice.png)



3. https://opencv-python-tutroals.readthedocs.io/en/latest/py_tutorials/py_imgproc/py_filtering/py_filtering.html)



# Blind Source Separation for Cocktail Party Problem

![BSS](http://pathpartner.wpengine.com/wp-content/uploads/2016/03/BSS-block-diagram.png)



- Aims to extract original unknown source signals from the mixed ones. This is done by calculating an approximate mixing function using only the available observed mixed signals. 
- “Blind” here means that the mixing function of signals which are recorded by microphones is unknown. BSS techniques do not require any prior knowledge about the mixing function or source signals and do not require any training data.
-  BSS mainly involves 2 steps.
  - System Identification - where the filter coefficients of the mixing process are calculated, also called Mixing matrix factorization.
  - Separation or Un-mixing - where the sources are separated by filtering using coefficients calculated in step one.

# References

1. [Pythontic](https://pythontic.com/image-processing/pillow/maximum%20filter)

2. [GeeksForGeeks](https://www.geeksforgeeks.org/spatial-filtering-and-its-types/)

3. [OpenCV](https://docs.opencv.org/2.4/modules/imgproc/doc/filtering.html)

4. [Youtube](https://www.youtube.com/watch?v=pSwRO5d266I)

5. [PathPartner](https://www.pathpartnertech.com/solving-cocktail-party-problem-using-blind-source-separation/)







