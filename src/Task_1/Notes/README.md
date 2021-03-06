# DIGITAL AUDIO FILTERS

This is a simple GUI application written in python in order to demonstrate the effects of basic IIR and FIR filters on any audio clip. Each of the filters have 4 types: High pass, Low pass, Band pass and Band reject. The filters included in the GUI are:

- FIR filters
   (using)

  1.Hamming Window

  2.Hanning Window

- IIR filters

  	1. Butterworth filter
   	2. Chebyshev filter
   	3. Bessel filter

  

## Key Features

- Apply any of the 20 different filters one at a time on any wav file.

- Visualise the frequency of original audio as well as filtered audio.

- Generate and save filtered audio as wav file.

- Manually specify options like filter order, passband and stopband frequencies.

  

## Visualize the Learning Process



![Demo](https://github.com/kalindkaria/eysip2020-33-Audio_ML/blob/dev/Task%201/GUI/Demo.gif)



## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com/) and [Python](https://www.python.org/downloads/) installed on your computer. From your command line:



```powershell

# Clone this repository 
git clone https://github.com/kalindkaria/eysip2020-33-Audio_ML.git

# Go into the GUI folder
cd Task 1/GUI/

#Install dependencies through pip

#Numpy
pip install numpy

#Scipy
pip install scipy

#Matplotlib
pip install matplotlib

#Run the app 
python DigitalAudioFilter.py

```



- Once the GUI is loaded, select the wav file of your choice using *Choose an audio file* button.
- Frequency and Time Domain Response curves for original file can be generated by the *Play without filter* button.
- Choose the filter of your choice, type in required parameters and click on *Submit*.
- The filtered file will be played along with its frequency response curve.



## Credits

This software uses the following open source packages:

- [Python](https://www.python.org/) 
- [Numpy](https://numpy.org/)
- [Scipy](https://www.scipy.org/)
- [Matplotlib](https://matplotlib.org/)



## License

MIT
