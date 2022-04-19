# COCKTAIL PARTY PROBLEM

This is a simple GUI application written in python in order to demonstrate the effects of RPCA and FICA on any set of 4 audio clips. MFCC Feature extraction is done to improve the effects of the algorithms. 



## Key Features

- Compare and visualise the different effects of RPCA and FICA on any wav file. 

  

- Generate and save separated audio as wav file.

  

## Demo Output



![Demo](https://github.com/kalindkaria/eysip2020-33-Audio_ML/blob/dev/Task_2/Cocktail_Party/GUI/DemoCPP.gif)



## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com/) and [Python](https://www.python.org/downloads/) installed on your computer. From your command line:



```powershell
# Clone this repository 
git clone https://github.com/kalindkaria/eysip2020-33-Audio_ML.git

# Go into the GUI folder
cd Task 2/GUI/

#Install dependencies through pip

#Numpy
pip install numpy

#Scipy
pip install scipy

#Matplotlib
pip install matplotlib

#Untwist
pip install untwist

#pydub
pip install pydub

#Scikit-Learn
pip install scikit-learn


```



- Replace the utils.py under untwist/examples with the one given in this repository.

  

- Put the GUI.py file under untwist/examples folder along with the utils.py.  

- Once the GUI is loaded, select the wav file of your choice using *Choose audio file* button.

  

- Click on the *Mix and Separate button in any of the desired column to process and generate the respective audio files and their spectrum plots.

  

- Mono channel versions of the audio are saved in the same place as that of the original files.

  

- Separated files are saved in the current working directory of the *GUI.py* file.

  

- The audio files can be played using the rest of the buttons and it will play them using the default audio player.



## Credits

This software uses the following open source packages:

- [Python](https://www.python.org/) 
- [Numpy](https://numpy.org/)
- [Scipy](https://www.scipy.org/)
- [Matplotlib](https://matplotlib.org/)
- [Scikit-Learn](https://scikit-learn.org/stable/)
- [Pydub](https://github.com/jiaaro/pydub)
- [Untwist](https://github.com/IoSR-Surrey/untwist)



## License

MIT