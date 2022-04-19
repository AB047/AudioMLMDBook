# **Feature Extraction**

Extraction of features is a very important part in analyzing and finding relations between different things. The data provided of audio cannot be understood by the models directly to convert them into an understandable format feature extraction is used. It is a process that explains most of the data but in an understandable way. Feature extraction is required for classification, prediction and recommendation algorithms.



**The audio signal is a three-dimensional signal in which three axes represent time, amplitude and frequency.**

![fig1](fig1.png)



## **Zero Crossing Rate**

The Zero Crossing Rate is the rate of sign-changes along the signal. i.e. the rate at which the signal changes from positive to negative or vise versa. This feature has been used heavily in both speech recognition and music information retrieval. It usually has values for highly percussive sounds like those in metal and rock;



**Example implementation:**

``` python
# zero crossings
import librosa
path = 'audio.wav'
x, sr = librosa.load(path)
z_crossings = librosa.zero_crossing(x[:], pad = False)
print(z_crossing)
```





## Spectral Centroid

It indicates where the "Centre of mass" for a sound is located and is calculated as the weighted mean of the *frequencies* in the music are same throughout then spectral centroid would be around a centre and if there are high frequencies at the end of sound then the centroid would be towards the end;

**Example**:

```python
# Spectral centroid
import sklearn
spectral_centroids = librosa.features.spectral_centroid(x, sr = sr)[0]

# Computing the time variable for visualization
frames = range(len(spectral_centroids))
t = librosa.frames_to_time(frames)

# Normalising the spectral centroid for visualisation
def normalize(x, axis=0):
    return sklearn.preprocessing.minmax_scale(x, axis=axis)

#Plotting the Spectral Centroid along the waveform
librosa.display.waveplot(x, sr=sr, alpha=0.4)
plt.plot(t, normalize(spectral_centroids), color='r')
```



## Spectral Rolloff

Spectral rolloff is the frequency below which a specified percentage of the total spectral energy, e.g. 85%, lies.

**Example**:

```python
spectral_rolloff = librosa.feature.spectral_rolloff(x, sr=sr)[0]
librosa.display.waveplot(x, sr=sr, alpha=0.4)
plt.plot(t, normalize(spectral_rolloff), color='r')
```





## MFCC (Mel-Frequency Cepstral Coefficients)

This feature is one of the most important method to extract a feature of an audio signal and is used majorly whenever working on audio signals. The mel frequency cepstral coefficients (MFCCs) of a signal are a small set of features (usually about 10–20) which *concisely describe the overall shape of a spectral envelope*.

MFCCs are commonly derived as follows:
 1. Take the Fourier transform of (a windowed excerpt of) a signal.
 2. Map the powers of the spectrum obtained above onto the mel scale, using triangular overlapping windows.
 3. Take the logs of the powers at each of the mel frequencies.
 4. Take the discrete cosine transform of the list of mel log powers, as if it were a signal.
 5. The MFCCs are the amplitudes of the resulting spectrum.

**Example:**

```python
mfccs = librosa.feature.mfcc(x, sr=sr)
#print(mfccs.shape)

#Displaying  the MFCCs:
librosa.display.specshow(mfccs, sr=sr, x_axis='time')
```



## Other Important features

- LPCC

- MFCC





























