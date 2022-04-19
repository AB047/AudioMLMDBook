# Intro Detection and Skipping in Videos

Media consumption has shown a tremendous increase in recent years, and with this increase, new audience expectations are put on the features offered by media-streaming services. One of these expectations is the ability to skip redundant content, which most probably is not of interest to the user. In this work, intro sequences which have sufficient length and a high degree of image similarity across all episodes of a show is targeted for detection.

## Existing Solutions

**1. With the Help of Black Screen:**

It tries to detect intros using two types of input available: video frames and audio signals.

- Video Frames: Usually there is always a black screen just after the intro ends, so it averages over the greyscale values for all video frames upto a few minutes and then takes the minimum of these values. Since the black screen will have the lowest intensity value, we get the time when our intro ends.
- Audio Signals: So the above black screen is accompanied with a 0.5-1 second of silence gap. They take the root mean square of sound energy and zero crossing rate upto a few minutes and then compare their values and if both of them are below a 'certain' threshold for 0.5-1 second, then that gap is termed as the silent gap.

**2. Netflix's Algo:**

To detect Intro first the algorithm looks for similar frames across multiple video assets. Then the visual fingerprints are extracted from a collection of certain frames along with their subsequent image histograms. These fingerprints are later used as a comparative model, if similar frames appear in another video they are marked as either the beginning or end of the intro sequence.

**3. Notrobro:** (No intro bro)

This algorithm was developed in GSoC'18 in project by XBMC Foundation (Kodi)

It is basically, if we have 2 episodes of the same TV show, then we collect all the frames at the scene change points, compare them efficiently by computing [image hashes](https://github.com/bjlittle/imagehash) and output the start/end times where the frames match. The basic idea behind this is that two episodes of the same TV show are bound to have matching frames during the duration of the intro/outro, so we can utilize this property to generate the intro/outro timings of all the episodes of a show.

**4. Plex's approch:**

They used audio(title song) for intro detection. First they created audio print of theme song and then matched against the audio of the 10 minutes of that episode.

