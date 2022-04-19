# Audio Feature Extraction

- Reduce audio data by extracting information about:

  	1. Pitch
   	2. Timbre
   	3. Rhythm
 - Audio descriptors(MPEG7) can also give better insight on audio.

    - Low-level Descriptors
      1. Spectral features
      2. Parametric features
      3. Temporal features
   - High Level Descriptors
     1. General sound recognition 
     2. Instrumental Timbre
     3. Spoken content
     4. Audio signature description

## Best reported accuracy 

​	As referred to a [conference paper](https://hal.inria.fr/hal-01456201/file/toConf.pdf) published in 2017, 

- For environmental sounds, features obtained using a combination of MFCC(Mel-frequency cepstrum coefficients) and MP(Matching Pursuit) features.
- MFCC is obtained by first computing the short time Fourier transform of the signal. The spectrum values of each frame are then grouped into bands using a set of triangular filters .



## MEL Features

### MFCC 

In sound processing, the mel-frequency cepstrum (MFC) is a representation of the short-term power spectrum of a sound, based on a linear cosine transform of a log power spectrum on a nonlinear mel scale of frequency.
Mel-frequency cepstral coefficients (MFCCs) are coefficients that collectively make up an MFC. They are derived from a type of cepstral representation of the audio clip (a nonlinear "spectrum-of-a-spectrum").

![MFCC](https://github.com/kalindkaria/eysip2020-33-Audio_ML/blob/dev/Feature_Extraction/Capture3.JPG)



### Melspectrogram

![Melspectrogram1](https://github.com/kalindkaria/eysip2020-33-Audio_ML/blob/dev/Feature_Extraction/Capture4.JPG)



### Chroma Features

In music, the term chroma feature or chromagram closely relates to the twelve different pitch classes. Chroma-based features, which are also referred to as "pitch class profiles", are a powerful tool for analyzing music whose pitches can be meaningfully categorized (often into twelve categories) and whose tuning approximates to the equal-tempered scale. One main property of chroma features is that they capture harmonic and melodic characteristics of music, while being robust to changes in timbre and instrumentation.





## Key Differences among Speech, Music and Environmental Sounds

Referring to [this](https://www.researchgate.net/publication/303015866_A_Review_of_Physical_and_Perceptual_Feature_Extraction_Techniques_for_Speech_Music_and_Environmental_Sounds) paper:

- Firstly, music and speech signals present a certain periodicity that can be observed when analyzing
  these signals in the time domain (see Figure 3). Although with some exceptions (e.g., some natural
  sounds such as bird chirps or cricket sounds), the periodicity in environmental sounds may not be
  so evident.



![difference](https://github.com/kalindkaria/eysip2020-33-Audio_ML/blob/dev/Feature_Extraction/Capture.JPG)



- Secondly, when analysed in the frequency domain, it can be generally determined that the complexity of the spectrum of environmental sounds (e.g., the sound of a passing car) is notably larger than that of speech or music signals, as depicted in Figure 4. Moreover, it can be observed that speech and music signals usually present harmonic structures in their spectra, a trait that is not that common in environmental sounds, as mentioned before.

![Spectrum](https://github.com/kalindkaria/eysip2020-33-Audio_ML/blob/dev/Feature_Extraction/Capture2.JPG)



- Thirdly, notice that both speech and music sounds are composed of a limited dictionary of sound units: phonemes and notes, respectively. On the contrary, the range of environmental sounds is theoretically infinite, since any occurring sound in the environment may be included in this category (i.e., originated from noise, artificial or natural sound sources, see Figure 1).

- Furthermore, there exists a key difference between these types of signals. In speech and music, phonemes and musical notes are combined so as to obtain meaningful sequences that are actually transmitting a particular semantic or aesthetic message. As opposed, the sequences on environmental sounds do not follow any rule or predefined grammar, although they may convey some kind of meaning (e.g., bird chirps or cricket sounds). Unlike speech and music, also other important information is unknown, such as the duration of the sound events or the proportion between harmonic and non-harmonic spectral structure.

  
