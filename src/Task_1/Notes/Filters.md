# Task 1

## Understanding various methods of filtering

### INTRODUCTION TO FILTERS

- Filters are circuits that can isolate certain frequencies in order to reject/ amplify them from a digital audio signal.
- Applications include:

   	1. ***Radio Communications***: Rejects all the frequencies apart from the desired signal.
   2. ***DC power supplies***: Used to eliminate noise in high frequency present in AC input.
   3. ***Audio electronics***: Used to channel different ranges of frequencies to woofers, speakers and tweeters.
   4. ***Analog-to-digital conversion***: Filters are placed in front of an ADC input to minimize aliasing.
 - Some of the important terms are:
1. ***Response Curves***: Response curves are used to describe how a filter behaves. A response curve is simply a graph showing an attenuation ratio (VOUT / VIN) versus frequency . Attenuation is commonly expressed in units of decibels (dB). Frequency can be expressed in two forms: either the angular form ω (units are rad/s) or the more common form of f (units of Hz, i.e.. cycles per second).
   	2. ***Bandwidth (β or B.W.)***: The bandwidth is the width of the *passband*, and the **passband is the band of frequencies that do not experience significant attenuation when moving from the input of the filter to the output of the filter**.
    3. ***Stopband frequency (fs)***: This is a particular frequency at which the attenuation reaches a specified value.
     4. For low-pass and high-pass filters, frequencies beyond the stopband frequency are referred to as the stopband.
     5. For band-pass and notch filters, two stopband frequencies exist. The frequencies between these two stopband frequencies are referred to as the stopband.

   

### TYPES OF FILTERS

1. **Low Pass Filters**

2. **High-pass Filters**

3. **Bandpass Filters**

4. **Band-reject Filters/Notch Filters**

   

![Figure: Types of filters](https://www.allaboutcircuits.com/uploads/articles/four_major_filters.jpg)

​																			*Different types of filters*



![Response Curves](https://www.allaboutcircuits.com/uploads/articles/Davis_intro_to_filters_filter_types.jpg)

​																*Response curves of the different filters*



- They can also be classified as:

  	1. **Finite Impulse Response filters**
   2. **Infinite Impulse Response filters**

  

#### FINITE IMPULSE RESPONSE FILTERS (FIR)

- Impulse response of finite duration.

- Provide Linear phase characteristics.

- Always stable.

- Can be used for more complex circuits.

  

#### INFINITE IMPULSE RESPONSE FILTERS (IIR)

- Impulse response of infinite duration.
- Non linear phase characteristics.
- They are unstable. 
- Used for less complexity.



### IIR FILTERS



#### BUTTERWORTH FILTERS

- Designed to have a frequency response as flat as possible in the passband.

- The frequency response of the Butterworth filter is **maximally flat ( has no ripples) in the passband** and **rolls off towards zero in the stopband**.



![Butterworth bode plot](https://upload.wikimedia.org/wikipedia/commons/a/a8/Butterworth_filter_bode_plot.svg)

 #### CHEBYSHEV FILTERS

- Have a steeper roll off than Butterworth filters.
- Minimise the error between the idealized and the actual filter characteristic over the range of the filter with ripples in passband.
- Because of presence of ripple in the pass band, it is not chosen in applications needing smoother response in passband.



![](https://upload.wikimedia.org/wikipedia/commons/c/c2/Chebyshev_Type_I_Filter_Response_%284th_Order%29.svg)

#### ELLIPTIC FILTERS

- Equalised ripple behaviour in both passband and stop band.
- The amount of ripple in each band is independently adjustable, and no other filter of equal order can have a faster transition in gain between the passband and the stopband, for the given values of ripple.
- As the ripple in the stopband approaches 0, the filter becomes a type I Chebyshev filter. 
- As the ripple in the passband approaches 0, the filter becomes a type II Chebyshev filter.
- As both ripple values approach 0, the filter becomes a Butterworth filter.



![Elliptic response](https://upload.wikimedia.org/wikipedia/commons/d/de/Elliptic_Filter_Response_%284th_Order%29.svg)

#### BESSEL FILTER

- Analog linear filter with a maximally flat group/phase delay (maximally linear phase response), which preserves the wave shape of filtered signals in the passband.

-  Transition from the pass band to the stop band is much slower than for other filters. 

- But the group delay is practically constant in the passband.

- Maximizes the flatness of the group delay curve at zero frequency.

  ![Bessel](https://upload.wikimedia.org/wikipedia/commons/e/ee/Bessel4_GainDelay.png)

  ​										*A plot of the gain and group delay for a fourth-order low pass Bessel filter.*



### FIR FILTERS



#### HAMMING AND HANNING WINDOWS

- Window function is a mathematical function that is zero-valued outside of some chosen interval, normally symmetric around the middle of the interval, usually near a maximum in the middle, and usually tapering away from the middle.

  ![Window function](https://in.tek.com/-/media/sites/default/files/u811871/blackman-harris-t.png)

  

##### HANNING WINDOW



![Hanning window](https://upload.wikimedia.org/wikipedia/commons/f/f7/Window_function_and_its_Fourier_transform_%E2%80%93_Hann_%28n_%3D_0...N%29.svg)

##### HAMMING WINDOW



![Hamming window](https://upload.wikimedia.org/wikipedia/commons/4/4f/Window_function_and_frequency_response_-_Hamming_%28alpha_%3D_0.53836%2C_n_%3D_0...N%29.svg)

##### DIFFERENCE

- Hanning window touches zero at both ends, removing any discontinuity. The Hamming window stops just shy of zero, meaning that the signal will still have a slight discontinuity.

  

![Comparison](https://in.tek.com/-/media/sites/default/files/u811871/hamming-t.png)



### COMPARING IIR FILTERS 

- Here is an image showing the gain of a discrete-time Butterworth filter next to other common filter types. All of these filters are fifth-order.

- The Butterworth filter rolls off more slowly around the cut-off frequency than the Chebyshev filter or the Elliptic filter, but without ripple.

- Chebyshev filters are sharper than the Butterworth filter; they are not as sharp as the elliptic one, but they show fewer ripples over the bandwidth.

- Elliptic filters are sharper than all the others, but they show ripples on the whole bandwidth.

  

![Comparison](https://upload.wikimedia.org/wikipedia/commons/b/bd/Filters_order5.svg)



### ADVANTAGES OF IIR OVER FIR FILTERS

- IIR filters achieve desired filtering characteristics using lesser memory.
- Has higher computational efficiency and shorter delay.
- Can be used to implement analog filter responses.

