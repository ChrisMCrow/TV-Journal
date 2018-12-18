export const GET_TRENDING = 'GET_TRENDING';
export const GET_GENRES = 'GET_GENRES';
export const DISCOVER_GENRE = 'DISCOVER_GENRE';
export const LEFT_ARROW = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADFwAAAxcBwpsE1QAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAUaSURBVGiB7ZpNbBtFGIbfbxLbuEqpWwgUAQUhIn7c2Mg7dkIaCdKohRQJKiTO9MChvSAK4oLEoWdQK/UCXBAHBAckfkQRLRCitpGFNmtTUlyaRqqECgURSps4lWMnOx+Hxqu1Yye73jFF0Oc0Oz/vfK8+7+7MrIEb/LsgXULZbHZTOBweZubHhBAPMHMPgJvrus0CmCaiKaXU8UgkMppIJC7rmD+QkUKhEF5YWNgNYA8z7wTQ4VPCBnAMwHsAPpVSLrYaS0tGstlsNBwO7wOwH8BdrU5exwUiOlgul98ZGBgo+R3s24hlWbsBHAJwr9+xHjlPRC8ZhvG5n0GejViWtYGZ3yWiZ/3H5h9mfn/dunX74vH4vJf+noyYprlZCHEUQDJQdP7Jh0KhkWQy+cdaHdc0YlnWFgDfAOjREVkLTCmldmQymQurdVrVyLKJcQB364ysBc4DGJRS/tasg2jWMDY2dhOAT3D9TQDAfUT02fT0dKRZh6ZG1q9ffxhAqi1htQAzp2dnZw81a2/408rlck8w89H2hdUyLITYkUqlRusbVhgpFApdpVKpAGDLPxKaf34OhULxZDJ51V254qdVKpX2oj0mZojoUQDbA+rcs7i4+EJ9ZY2R5Rv85YATNWIGwLBhGN8x89U1e6/Nq/U3fo2Rrq6u5wDcoWEiNzMAhqWUpycmJrYS0RENmndeuXKlZoVRY4SI9miYxM1F27YHpZSn8/m8JKKTALp1CBPR8zXX1cLk5OTGSqUyA/9L8WY4mTBNMy6E+BbAbZq0AWBxaWnp1v7+/jnAlZFyubwd+kzUZEIIMQ69JgAg1NHR8Xj1wjGy/ETRwQyAJ/v6+s7l8/mHlVJHAMQ0adcghNjmlKsFZo5r0HYykcvlDKXUOIDbNeg2xB2zOyP3B9R1MpHL5R5i5iMANgbUXAsnZvdTa1MAQScTlmX1MvNxAJsD6Hnllmqh01XZ1aqaEOIZKeU5y7IexLXDBC2PWA84MTdd/fphaWmJAICZowDCOjQ94rw+3EY87Y0bIYT4yjTNdDqd/h7AIICmGyDNzDkxuCr/CiAYE0J8YVlWr5TyrFJqF4BLAfS84sTsNjIVULQbwAnTNNOZTOYUM29DmzNDRE7MbiNnNWg7mUmn01NCiBEAf2rQbYYTs/uFeEKTuJOZVCr1AzMPArioSbsGpdTxatkxEolETuLaWawOajJDRO3IzKJt2+PVC8dIIpG4zMxfa5zIyYxhGJO6M8PMR6srX2Dle+QDXRMt0ygzM5q0P3Rf1BiZn5//CPqfNN0ARi3L6jUMY1Ip9ZQGzV9jsdjH7ooaI0NDQwsADmqYqJ5uAKOmaaY7OzujGvTe6OnpKbsrVixRotHoYQA/aZisnm4hhOl+0rTImWg0+lZ95Qoj8Xi8QkT7A07WLlgI8WI8Hq/UNzRcNBqGcYyImh5PXi+Y+c1Gp4zAKqvfubm51wDk2xaVT4hoIhaLvd6svamRoaGhBdu2dwI405bI/HGKmXfU3+BuVt2P9PX1XQIwAmBad2Q+mFJKPS2lnF2tk59Pb18CeERLaN7JhUKhXV4+vXnaIWYymd+LxWKamQ8AUIHDWxubmQ8Ui8V+LyaAFj5P5/P5YaXU23CdYGjmHIC9UsoxP4N879lTqdRopVJJAHgFwC9+x6/CBSLaXywWk35NAP/3v3A0wrKsDQAGmXkAQC8RbcW1c6fqH2vmAFxi5h+FEJNKqaxt2+PupfgN/kv8DaAz5FCh9yc8AAAAAElFTkSuQmCC`
export const RIGHT_ARROW = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADFwAAAxcBwpsE1QAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAUESURBVGiB7ZpPjBNVHMe/v9e0tWSRgiAYFY1xg6Zsa6Zv23XZRAsBgYMhJp7l4AEuRjReTDxw1kDCRb0YD0YPJv6JIbLRzYZlU+N2psHFArubkBgU1BVht2u67TLv5wGmmXa33U7njRjlc3oz897v9/3m1+m892aAu/y7IF2B8vn8hkgksouZnxFCbGPmXgD3NnWbAzBDRFNKqdPRaHQkmUxe15Hfl5FSqRRZXFw8AOAgM+8BEPIYwgYwDOBDAF9IKZe61dKVkXw+H4tEIocBHAHwULfJm7hMRMeq1er7g4ODFa+DPRsxTfMAgOMAHvU6tkMuEdGr6XT6Ky+DOjZimuY6Zv6AiF7wrs07zPzRmjVrDicSiYVO+ndkZGJiYosQ4hSAlC913imGw+F9qVTq99U6rmrENM2tAL4F0KtDWRdMKaV2ZzKZy+06tTVy28Q4gId1KuuCSwCGpJRXW3UQrS6Mjo7eA+Bz3HkTAPAYEX05MzMTbdWhpZG1a9eeAGAEIqsLmLl/bm7ueKvrK/60LMt6jplPBSera1gIsdswjJHmC8uMlEqlnkqlUgKw9R+R5p2fwuFwIpVK/eU+ueynValUDsGnCWbOCSEGAcz6idOCR5aWll5uPtlg5PYN/prfTKFQaMEwjO8A7EIwZt5ovvEbjPT09LwI4AG/WZRSJwuFwnYp5TkEY+bBGzduNMwwGowQ0UFNie4nojPFYlFKKc/Ztj0E4Iqm2AAAInqp4dhpTE5Orq/VarPwPhVvx29CiJ2GYZw3TbMPwAiATZpiL928eXPjwMDAPOCqSLVa3Qm9JgBgs1Jq3LKsdACVCYdCoWedg7oRInpaU4Jm1jPzScuynsxms9MA9kLTPSOE2FFvOw1mTugI3oLNzDxmWVZSZ2Xcmt0Vedxv4FXYyMzDpmk+obEydc3uf60NPoN2whYAY6Zp9mmqzH1Ow22kx0dAL2wCMFwoFLZls9lppdQBH7HqmlvOfgMmwswxACAiPzs59bFuIx2tjTVwFcBQJpM5OzEx0U9Ewz5izTsNt5E/fQTslGtKqf1SyoumafYJIU4CiPuIV9fsNjLlI2AnXGXmHU4lAIzB51OeiOqa3UYu+gm6Cn8IIfb19/dPaaqEQ12z+4E4piHwSlxh5iHDMH7QVQkHpdRpp103Eo1Gz+DWXqxOZokoiEoAwJJt2+POQd1IMpm8zszfaEoCAFds2x5Kp9OTuisBAMx8ypn5AsufIx9ryjMLYG82m50OoBIOn7gPGowsLCx8ilv/874QQuyXUp4LYA3i8Es8Hv+sIaf7IJfLLQI45jcLM8cKhUIGwZgAgLd7e3ur7hPLpiixWOwEgAt+sjDzGBF9j2BMnI/FYu82n1xmJJFI1IjoSAACdMBCiFcSiUSt+cKKk8Z0Oj1MRC23J+8UzPzOSruMQJvZ7/z8/JsAioGp8ggRFeLx+Futrrc0ksvlFm3b3gPgfCDKvHGWmXc33+Bu2q5HstnsNQD7AMzoVuaBKaXU81LKuXadvLx6+xrAU1qkdY4VDof3d/LqraMVYiaT+bVcLvcz81EAyre81bGZ+Wi5XB7oxATQxevpYrG4Syn1Hlw7GJqZBnBISjnqZZDnNbthGCO1Wi0J4HUAP3sd34bLRHSkXC6nvJoA/u+fcKyEaZrrAAwx8yCAPiLajlv7Ts6HNfMArjHzj0KISaVU3rbtcfdU/C7/Jf4GeKznTcM2KPQAAAAASUVORK5CYII=`