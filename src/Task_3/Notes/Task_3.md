# Task 3

## Urban Sounds Classification

### Dataset

#### About the dataset 

Link to uploaded dataset: https://drive.google.com/folderview?id=14u-bfL8kPRUDggPCSVio25Bw7LSuoChK

this dataset contains 8732 labelled sound excerpts (<=4s) of urban sounds from 10 classes: air_conditioner, car_horn, children_playing, dog_bark, drilling, engine_idling, gun_shot, jackhammer, siren, and street_music

According to the original paper, sound excerpts are taken from [www.freesound.org](http://www.freesound.org/) and are already pre-sorted into ten folds for cross-validation.

The meta-data contains 8 columns.

- slice_file_name: name of the audio file
- fsID: FreesoundID of the recording where the excerpt is taken from
- start: start time of the slice
- end: end time of the slice
- salience: salience rating of the sound. 1 = foreground, 2 = background
- fold: The fold number (1–10) to which this file has been allocated
- classID:
  0 = air_conditioner
  1 = car_horn
  2 = children_playing
  3 = dog_bark
  4 = drilling
  5 = engine_idling
  6 = gun_shot
  7 = jackhammer
  8 = siren
  9 = street_music
- class: class name
- There are two classes (car_horn, gun_shot) which have a bit less than half amount of entries compared to other 8 classes.

![](https://miro.medium.com/max/1400/1*C2VJxBRDrwz1ozRvSj9gkg.png)

#### Variables in the data

- The sampling rate, bit depth, and number of channels are the same as those of the original file uploaded to Freesound (and hence may vary from file to file).”

- It means there might be many different sample rates in the data, which means even with the same duration, the number of samples will be different. 
-  Moreover, different bit depth means, they can take different rage of values. 
- Some of them might be stereo, while others are mono.

#### Pre-processing to be applied

1. Convert everything to Mono audio.
2. Sample rate conversion to 22.05 khz.
3. Equalise bit depth.

## References

1. [TowardsDataScience- Part 1](https://towardsdatascience.com/urban-sound-classification-part-1-99137c6335f9)
2. [TowardsDataScience- Part 2](https://towardsdatascience.com/urban-sound-classification-part-2-sample-rate-conversion-librosa-ba7bc88f209a)

