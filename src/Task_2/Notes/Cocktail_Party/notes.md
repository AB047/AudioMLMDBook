# Cocktail Party problem

## Audio Source Separation

Audio source separation is the process of extracting individual sound sources (e. g., a single flute) from a mixture of sounds (e. g., a recording of a concert band using a single microphone).

### Using RPCA



```python
import numpy as np

import matplotlib.pyplot as plt

from untwist.data import Wave, RatioMask

from untwist.transforms import STFT, ISTFT

from untwist.factorizations import RPCA



stft =STFT()

istft =ISTFT()

rpca =RPCA(iterations = 100)


 x=Wave.read("mix.wav")

 X=stft.process(x)


# this may take some time

 (L,S) =rpca.process(X.magnitude())


 M=RatioMask(np.abs(S), np.abs(L))

 v=istft.process(X *M)

 v.write("vocal_estimate.wav")
 
```







## References

1. [Research Gate](https://www.researchgate.net/publication/308054917_Untwist_A_new_toolbox_for_audio_source_separation)

