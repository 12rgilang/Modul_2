import {
  Flex,
  Box,
  Spacer,
  ButtonGroup,
  Button,
  Image,
} from "@chakra-ui/react";
import { MdLocationPin } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

let Navbar = () => {
  const location = useLocation();

  return (
    <>
      {/* Navbar */}
      <Flex
        minWidth="max-content"
        alignItems="center"
        gap="2"
        pl="10"
        pr="10"
        pt="15"
        boxShadow="xl"
        p="6"
        rounded="md"
        bg="white"
      >
        <Flex alignItems="center" w="50%">
          <Box p="2">
            <Image
              borderRadius="full"
              boxSize="50px"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADhCAMAAADmr0l2AAAAmVBMVEX///8AcEIAbj8AbDsAaDQAZCwAajgAZjAAYyoAZzMAYigAajn4+/oAZi/8/v3y9/Xr8u/l7urc6OJ9qZLP39esx7nH2dC0zMCUt6Vlmn/I2tHg6+Y/hmPV49xyoomErZigv68deE5TkHEsfldnnIE7hGCevq12pIxKjGuPtKFQj28le1I0gVuCq5ZclnkQdUkAVAAAWhYAWREhpbn5AAAgAElEQVR4nO092XbiurJgeQ5mNiZAmMMQCOy+//9x16oq2ZIt23KG3eesdeqlOwnYKqnmSZ3O/+C7MHibxdvN+bhf3e+H2+1weL881ufrNlmMB397bd+D4TT+fDxtJ/Js22WMWQLS/zPXtr3IsW+Pa/z2X4jnYDbfM99L8bK6tWClmHrh8zGf/fdgOUzWOz9wWT1mRTQ9fzdJhn977c2w2Owcu+nYKrB0A+e2mf5tDOpgdrS9ly8hlyPp2cek/7cR0cJibXvNZOk2489SHGd/G5siDK/dyITp3OvO5ISZxzajv42TBNOHb3AyHOzOwjH6oOWGl/+UY0wOjqnEdK+dzsX0w8x7bv82binET89crDipspuaHSEHy7bnvb+LXrJrgV6Xrfl37m3kbIriX0Rveo9aKYVwCZsStPlO12bxX0JvfPHb6Tx2wS96rb7Vtbzd4i+gN3z12xhjHCISixO35Rct//GvW6rXsC16XWtH3x37bb/aZc6/S6eJZbdeYzfI1thKzBB4q3/PEh9+OF8xON18f1pyIQDz/q1D3LZmPgBZ3ne/ZJF77/+G+TZcmW8/+O5u6rsHnuf4ko+QuLbvpJ6+F6S+vqGVlwLzf18pJgYeQ4bf8/7xWH9eT3Eymy6LLDQYLd9mSbKdX9/Nz9N7/11O7L+a21mpYWb41I8WJM+i5BfxWz5baTD2avTUbTvLxln/Gn5x2FI22CuDp87bakX79ktkem5DngjurdEC2bR/qhX9hqfYX31Bt3dZt2G3J9EXntoNf16aDrtfUn6pSzeue+zxKyo/hej4w/i9tXH7VAz9Gnp6tJMvEtirHw29zVo6RgqElYL94ytUT8B2P+hgxOHXF9Kt5phVW7dJxZAtfwq/7ffwS1XXRPPU3v1b+HFH+O1n8Du1d9+KEGr48P2b+KUYOj8S5/8B/LqRJjZ2qmFAy5Dl/R/AcGuKX+Q6jq1fmPWuefBAr+Et1wuti6n9/X0MjeWLl7L8cvvu6AiPx3vLcCxrVst27vNpetyfplrX/yYfzozli43+9nISlUkv0q7irXiEzLltyfAxymAAOLWGRBO8mctP60nf6V2DIoq2/uk3BQsW7jN6W7aJfn/DzR+1sV+8TJ/3r7ZCqOysf3ws2THMf0hq7dpCwlrsyxq/1yp0Yt2kb07kqGJUEbftZydteSuFik2lKADbfdVqW7Wzrx1Z2Y32mXVndfNfxwcZEREBtplqzc3ameDMxO3UwLqlpcg+lK8vdkSB9in73dFh4Tnf7yWoIOZvCm/et/Rc7C85+XFrT9QvsPsJ84a2wGh04yfmWvlJX1hqjlyKUmLQ2rRwTp3WMG5vgLpFo3rwSOnU29JPCYWLLT/b8MQrUieHrUw6lmVSsxG2Ts/0TQSM60XpCvO1HEqPWTw98ctzfi7uU0jMEnVyyMyY1KpxdpfHymApdts4zd5AULvz8XixfbU9Ebr1NQL7igQ4uCvH4tC56SQ82XCW69/AqjFiSVbe3FrYmoRKhFSZbnZooXmVzvusGC8OdUcnPsuf7VlXOuaZkTCwK5StHkZmbO5lvL3ccPPF3lY8b15maK8yqrK1LTvc53tlqI39NhHhg6kxnwvA3tUOAq1RncJrwESWIvAAAvtPlVy4/nnOJY6am2or29yiuZrGgpjiB8X3KgQ7j4/X43kz38bJbDGdThezZFsp96aKUTM01lYiQ94MLTREpgN+DR7mSt94MaYEyiH65eT5oo3S9810xYkTqGm5J/vpCGwBjB1D/jkzIh1yDeFujoZVBv63HM4miA3Nbiva8U8a5dY40fOSpJFZMsKctb8AfUO/MDgsOlN+MHaz5wREj6s2Sxw4v1ilY6YiLMxscwvPbVb3EEcgF25igqH1RW/MAPpGO2wFqFeefOWNHENET1GUiYlC/IngpB7qQqc5fgytjR4otyaOEUTvUaTWxOZmj8aV9kfTZHudrB+X1fv76vJIlf42mY6aGMbISBNBpzGazw0cc6U9y0LRT4N31KqfcbJ5PD0ntc1c0RyCfSFB+svn45pU05RR5CKcqp/W+GwS9IRdlCFoUldWcnQJhsnnux/VNYdYzA2c6GOuJ3ITIya390WVZq2q2AiKDPqlX1VDFhKVt2o22TlBscYHO3uK32duZD+SkknUM7BCpXhTTMSX1fxpYJB5gVKo1mAbnULkeri9+J6KHEudc489D+/3W5f/t4g7s8NVrOJoQqGSOyMQ7NbUtGWnJZ/JtlmUKbmH4fY9tNVdYYG3n89GWYqpN3ibfT6LaQxm+x9yT8hnM+24UuIxKyTWERS9N9sytpd+bUCjOWMnH6UUEwsv2l6W8camj2aGLwuCdcaPBhmmUDrzWabSvCouzO2Gl0/p1wZcSC9afnpBfnb0NWdfLSdjBoHE7Ueub5kj3N1m8cbkeOhbdjyVR5hLO1smY4NMCARjZpfwJf+VFcU8Gsbsevv3k6Nhj07kgoIZxUnVKDqqxICkz1fEhqRqeDUnpfEPC7LQPXXiHcaVLDxC9zDgdgjbNbloM8fqWm4f6zisO6Z7mOduZs1WlKMkjnNCq4jlS3io+S4l12MxO3LYc7djTi4orXs3wP97qyvHMHhA6o3dmq37sQdBvzFHzVqNRXjxJcPPcm3Pcbz0tZ6tyN5C4lgqWtRapFI+slAmOM2Fj+3fzskYN26wuD5F3wQdqOXEff6/YA12lllma5bSlv2J73ePnY1KmpZz+4yno16/3xu+JZODJKFdNfQ4l45Q51RIGeVA5RvSuJbtfMQFipvdZYVgWaMO/4WbWqdHt5BvqoZzyrrhGyDadRI1a249C1bOIL6ITrACq02lWK5XrnqQebpYFMHjBq7/HuvOQ4qrW90BBOR4lJmv1tQX5uqJZxfnnFK8QSeWluJpeHh4tYAhnMIypb22y8pe0ucl94BH5zf6uiK0zhHJaNRZ8t13hp0+l8jFbFMlcOLhyos3pqVE2tkA/zFYsP4ZvCWstH9rKU1SruuQRExJyn5eqmT9mpMFi+AYedXdO0NTaWMbuVEEnP248gJTMRwjpmwDBapyPlGG5PaneEoLiUZLmzvORYyckUWoEoVjSPjZ76Mz3/o1z5ChWTOEuId5WpKHEfgRgmZJragBpCc6CZdhrluxu2WOkfzHkocjmSu2aTZxA7rLOwNeXbeHzMo9TsxNB3ESn+bX6ynRukO9t+R03VxPsxGQD1AcUPYS67jtbWfJf7Yc09CkFAGQKwYAJMfWIDLFYbyDxwWTTo+zTLDFjhbrnv5NJK+hLYLPPPBfCw7HdHMIwQlOPV8Hdz4c0hGecT2ckoZgXeX5xHroSTTqqF+RlKBdmWBQIMYiA77v6xeu/zsoUbmK0XQIslAm2FPXKbeD8NwUhJmiPj6CEy2yTpZPbACJDgs0usmtSNuoqVSUWKZSfRTS6kCEeukfXzNxJpl0Ugn+RNv7BDTKiRvUcPpFIAbyAMyqtKX6N/hyDjmFmnGgwI8TJkhnrlm5SQehfKIUFtm7W9cRuc8sN5LVhzHb4TaYeHfYQVICZ40/DBxp4ZQYJTilI5RdKUmGWpbJc0SJJZftQPggMZ9EofQ0dgGLsDc7IjW7Yusw3+A67j4eDUdvsTA/PS6LOD9yGuU5WHiqsISrM6YS5LVFXcWNyc04I2LPSoA5OhAq4GsDt4r3WSf4Fi/bwtGdc4AwEJHf7UkuBc74ejA/OD2AIuaZea8vmViBSSPNNrebZabPnGejoqHMWATJwpUyqE6OKUR8aM89SRrDh+jZIMyVmAGxDgQg+FMgBMJDMsCNWXAtMDnDvMKP5b/M41ehgTxOMmOYL6THN/iF2/Xc4AIWJLOd92Yl+8PHZtZDOibqhz+nDsvsvLocT5yMR0TT3PThjjkaYR5tQy6TvU/9imSYZquTFEX2CLu69iGDRW7sc80FsS/gHjDJubCjLfcWnYfD+KiYcLXhv6IqE6oKWTk8AGw73euQjhwEH6SsYfO5LOZNh/1cuznb5vWthUKQDG5RFFc20sog2XRQRgLsy3UDHCU8VAxzYE9BXOjm05aS/5FX+4jwGsRSQBPCVnBiBW6UAsC66vYCZHJGys0KuvWbM2EDt2CUPwRhQm4gmEkIFlMLFAiprOvB/QWZxfUDJ1bwaWMpcBk1eyiJI+0XLprk1IsBEx+k1UHXMdcNIJEhhgK0+qhAkDTTazOCIFz4skAwSURTG7cWIN6fFV5ReMdizTbMUdpMJAFOUUB7mboQfpnlrSCGYjHbi1JtL/w3UMZ2quDBzkz/KOwaXDx/DOoweCD/jxwTcptPYSD0qqBn4vG6LiqCRI4gAr+BhI/435AZ38T/IG/Xv1qR91xvF+PZOmTknPOdcOLO23a9smx2OfWHVGkAxwXRZyyZ4hTg8C8p1XgGmpqWmRllyDMGDalqqwMgM3IEsUOkHU4QhXKA+9UT2nAq6CNV9IVM88LLSQJUBi6N4w0vUWdDGFSu7FWMUAy7NQQ6GC6Hg2I3MTdaQLRg5B5N0kVHpCKjSq8rtIvSGmkK9PsiP0FAkG+Tmh4xCPUgkQopg5HrqpMfxueDA+AVuqmAMAHBe4YgMg8IraDy9cN18Qxw9gOIFkAGVVj2u0KeyT5/vu73j/XmlFQN1UMiDXGPgaL0AZTR6e7nU9KKSZUMQfCeP7mCRS8MaN7VPbACXnM9CfuEcctM77wVEmmM54oxS+xbE23XCUjSCPUSyJhAQ6DJxa9oRkJ0+WeWmeGBJuYj+29FN4gWJoAgbAkIHKB0sGny/1Utw3UOGuKDqA7Fdx9Ml3Hqn6ymoQcd8W6f7w4oG/S2QHF5LRAEMQnmP+pkh6tzODcwDir6uDIcvW45DMrDJ+TVp6q6xLeDq11zeAiAAVjRIOqGuLQlPRJlkCGATAB5ghIY2Bu8LgjuNiazLe9ZOqGUT9Bj4sZfIX48OmubyArg9MXaUCYAcaGA57o8KiZAZjvrdRsf2bO03W/gawChAwui1OJhFNT9Btl6y9sVUBx65KClXKRKmLfX0KhEDHQwRvyOAisKKXMaLSQ4OqN/7NSmSUWW+09xt4FnMZUCZ4mZaUgvgtvYQKIZiurOPRgyDJfB7rtIMg+SlekYOFDqKABBPKCnHgq03aLr9XZ1g1T0hY+SxQT6FbgNVX6QKRskMsOqXytwc5Ga7BjlYMCGtAJnt3/s77YTqMURtuc5TvSiex4SJthl6CcAjSJjpw/VtX0mx8e1nE3p8/Xjx8+wuSC0IGmHT1tq6y2sVE0EtjoNkxekXE+n697D9Ax/mQjq8AKkQmmHF+xPs+VwON7oKi1c8K9BKuA6QEej+cC5xljKwCNQjsNaUOTBzqG9t9AhaK02cZLEm1XxTFw+cBf/D9JvXUGRLJSKOm4akYosDB0IqOpRFmAzXfrUIhNWwquI6pDJgrhCnAg9rFizv3lsvpesqoYwqe6pAq5zllxLfWEqqnJAHbXDBIJnIBfGfrEbrRJgX3BkFzA00gAIFvL+tHUecmx+XDHkDbhIV4LO/LPCKvpKEuQ8lDIQ70dViJmrFSN5g0jUkCtE40BHYG4BcUXSxyiTdmSQGptfPnTTKOAz5S+z8KhKgqG+ogOlTJxzHgbMUHym1CbJ0fE/bvd253O2n11uRj5v2+xvfIdRfeKjuvmjPIyhaLe36NvrBi2CvimSqNpNC1BRzYUyHNuAcCgB1iaikZauVMqUP7xsyjZ8NXeYYKIqWubAdtQfBK9EJii1ayN4xQhS8iwmfUBBT/9IGFpu+FoqwejrREy+h0DjFLYGYsKTTXdFVoUbRRL6+R7yRlqcuQZZHEIKBCfFxeZ6u6OUAkzfyRQDk4WwkukHd4l4oSoEKeUvDGZJfJpUDj5DGYfvx2OD6agkUyO1VPZTwlCK/kFvGQbB4UG0KeDEkxyualRhl/M1LuRWt8+IlJ3l+h/i9cN4/b7b3THMnENqknq2bVcbNhjVwU5civDAYSO9pmtUjPhsJpQyQwfCxZvsv2JPgJJB4dPztRjyMevOPlZcvcX56Uee53fPDfXpo6PfZJKSIEMaRXICOYH/58yp1G5ewxdOJ95N4vF5kCEFThblLIDtaHuapnWyIFqruAzepm9NJWTDtUHnCxnpW0kgYEkmxmO4+PJlgbWcrA7va9kUhdOh4NBVokqgVlncNCzEv7Qr/R+cjQY0kkRHLUJC7ZGHHLhdYnVrg61PK/8m+vJoPEGQBvWs1k4ro+iszFEcTEzcQQ5UawQ0SmW/4KbSmfCnsHvle6hrgXKueJhIoegfIU2Yjn0wRnG5DrXOgw7IqYWQCnkP6NqgTIXMv1udclyD3qK6ZAynbXGXIA6GLGjeQJii2Bi77ieXNtNDSXQiE/r4CPg6DlgBT73r3iuo9BjIDwFE0MdEuUKIVyjhChRvcellk62QA8v4IZckGwCl4DCQQtbvPtf1ZGOxri6t2r+Q9KAcCbAauViHPPrRctiqZTuPRLgJbxu+jHPq0B4uH5dD5BRVHncR6xHcSgjSSYDPSrtPmTIr3JbwW1BpsDBjKfyMf3Sk3WtCsNSHkdor7vv+dX9wPJ+/l3sKZWeXTyHwDx+PiwmC6K9RWQN4HiRlMhXmFQTA4JgZ/8RquEmUV48kBOtJ1OWZHE0HCiIE69Na0sw5zDG8UTtRmRBEY40WBEkYWnUuAVlknbNrXcYTidGpGgKfQQgy6eG1cxAYUMpw9qm/DQIku8ZdfvGPWfCmlkbp0LDqQP6BKipkM9ligf/8OE8mj66ihchMx70gEoVdxcXXq4k88MOvhCgjyG3AUgfNSzjJ7Zz64n5S0cgmxIPg85CNsykonJRy3FLkB208rBR0UD5I0dGGDh8pQTA6l8KdgGAhs+H6E9n7ntY+HtdDKWaSovADJQBNdBgdNiUVkQqQqmTxWrkC2QodFgPWYCyPZHfSLcQqqnwxAkyRUUADnVbcL+IfkoCu46i9Wsz2/CwYhnyHu0Qnj8Yf6YmqqBhAoe9kqJ4iJqEzImSBtyka4bUNkmSdIRMTqWFkEzeW9s65jobT+c1xwZ1PxXP0mix7gxm1edPJ48IwXI7jpMiGe6vjErdYGzTcOLkuh2X0wwjqUj1vX4zzDd+utaY8Vl6SGMYeArTUaGnIVwGlypfzlfVk7DDJ7KmjLC1RpZBMxWHxdIR1w7Os2zyeqsZLP77wFpKU3QPk0P40vm7SjxVSzsnR8r16AsX3o6al+AVyHR0t+Ac1hR8oPyj0QBM0qGWV5BZw4bTuCHlfTHQpGGiD2WlyXG/i6qKaIe8jazIh0ASZywdIa8GA4QxN0ZpSVnwF9RVjcJCemsB3yV5oHAmUGi+fbWYepd6uSfpMokkR5UWWJUMNbYSwpjYJN4f0wRKPkOrl3jFLge8waSQOJ6apgv7GyB0k1w1313Lh6RM8TeRNOoTamgj8fICHTN/GgZOILrnU9aJAoOiZtQvEtpmHifKOam5wUVSISDEz5M36MQL0darixPMnIsWpPS4KHbOhJHa3uZZptmtu2wPAXR/gZuAg5h6ylI2SGzNSSuGrBojxSM4gKdpE4SzfoFpVkYPlXOpDabN307tASDYigXpXabE0BomEotPA+1RXRjhRQTJKUpj7IohUm8DTAPOPlTzfi2/mV53gGpDCXtD8ONEYDOR19HKa2YJK8Gm03asrIZXIVp/JSAZEMSw2oXR47+F0u4/UugpmB0ElN6L8HqAeQ54h+iIGJAKtizgRIK+JUkeqyEekjm6+l9WzXG1lPB9/q7O7LmSRmvzxnOJnPHY8JbNKVwU1MNKkIiGI1ohAIxPlRLWAZIXKRIrPpA38rCBSeztabB+Rkubl5qB1z2JBJZfoxaFu9qpGYbRhkISo32ONxEUJETwIs8uSaE4rFctBH6hgcbTAqdmoInZBYZykJD6kmWhqdoPl/mDFNWWUh0cqRG+HpmeFKMSIQA0bCIn6qNwRtSHd8QORfbIVZhVZyqxe866iKDXyyn4p819zutIlx7ti4AeWt5OYxO0lK4SUdF2BpgIonkQtL4onOhj07dFM0ltsUrPc7CmvV7IRc0q0nJWsSPSZT6wPRTYj8tlQpyt+Dc0sw44xDugvhCj9UOeR94V7hekq/cRFpeH4JLkHUluBqCRi0U41BfQI4o0k4Ddgbr0zRCKjkr6Z7LsaAS5dNIwhO5PsAi+K/nLWyTxP8YIG5yxpJHfqHnjPux0WIt/jREsUKEhwa2mX0OkWMzueMo2ZwUYe34n7TZ4Ecjo6HFqjm72qac3hOkKNILefbULv+dgqJsByYpUCwQhYBYGeOx2gIx8gOqulSq5awKybOEL0fSkVepXCkNoYT+or7U7ybvbij3TpXq2RON77lTcGg5uMM7AIC/J6qDcJGarVAQqcaPIOUiwJCVRiJEgrAlCW7ajO0mB7/KyrQa+b+4fSF+UrhVPI/EBssZSgRQs2AOVpaADOXVLweGyEbbWj4/pX43ni29pSX0wAXfKaJCHdKDO0zatb2wC+kiLbGMujkCBkHIm/NTccZGB6Wejbrd5hwugganLccNKWFJXGAnPNMIl6+JD7t2Zy7BE53K+sWsvA8g7NKdDha8P9XyjclnL+B+rtMwkBfq6mhqUBUGhR4BfjjaJ9TJKw9XHorhU+6pu3hpPGaljcVkycE1E+ZGsZSw6b/NwyoDVFgUJ8iNile54tbCyNZU61PzhI9kqsibkvGmwRKSXlSY4umn7D1loe4SzHG6lImwr3oSYf5U/vT/nUirmOihlZq6cvZ3dTwXv53GgU/Z+hhOAoX4CQmxT51d3yUgu4SyQs6aAcCUF6fFwsKrTu+3vkKUkeFkSX8rSDg4JL0N2ClCj2+okZVCgFIjxBdEbIIu6jSGWlFzQAvojkCrEaIbiTEOy8FdodoOZ1unHVsl+73IQnGwluNhG8ILXsd1KnmGIhXXCRg2HCUGs5GZcyVEpVA+0Sblk2I274VDadqKhw6bim2jh33i3/mMl41foLs0F0VMiC+0DHTNmutcxMxkCvD/HNJLbQPsPNzJ2f/rviFGWPiFn+++KwoI5kBdlduQ5TcqOZ7P90pTQnTTlRqNdqSaNURorecx+P84UMQbd4JkepUVqWZlehA7Szo4kqClP2LxmC3l2Wv3hq0IIjClaFasC1Vs691wJdPezJ+U9BrxT+kMM720xZq68RNmaoY5D0SxbzL4WSForWWXYhAIhroG2lYybzXxxoG1uGYtpkrlMcG9OrUxTLao5qeaD6ZTaZKSteHkPbCvSDPU7P3VmOKA7i151tuV5ge85zXlguurhkIVKCSTSuIr6Gd7jiq9E6pDpSOs4XfNxez9PJu+/ZQcRY4FhKFe/gdDAq9x8doTXSjsdJMtMYB6j80LkXYy1JolF0yDxkQbFCcTcNUQ0SpZKQU781S5IRL5Oz3LDUU9oIn+QwVXZ3oKoXOUI8AZFJwvh0NzB9K0ZGBRVSKolijpiDq5w4T/Eyt+WtAovsOnbNBDYC0swovYlrIvo0ngEzNGfmeIA05IDShCSyKFtRmeLI/CdVBtZDf53bQ6Ukfwa00dgGIm5wICJV00QNQPNDxI0fN5I3YE9iAqZmzpQ0XcUxvbt2Zkkmd3X+khiPTH7KvAgyS3xl0XUgkm60GZQFpRAihj+qxxT1ZEMkuJlUxI4/1PhwdSsuyU66TYb4ziXF+4lcaTCf5l1OuolkEykl4u2gkk9U/9ByLk3jRpZKPaz1Ejj/V/0VKmSkYyJrnXKFNGO9oWQ7hTMGrDAFLuSpS7X3iG3NFJg4DJSbMVjE6vM9cres5XU3s2G/OpQjJltgZf2A8BXX7qLcaRpbQBeQiXnnxIBdeCkRb12dxmiWzC/K2OSwYUezuinL07Wnq0AizHrCesQsYBrPSocR1MZHSTiJ636OZHLjE0TTWdRA54NTJvSbPW3RCKW7k6wIfeEPkytI/CNymSRo6q4lozMSo7K25DMRAwr+Moghb0WuVmuFKgA8X74xTwNLK6N+YjxaoBAYKBDrxtRQ5xt1uRPLCS8pT+kGzRGe/gY8Cbt5rNUyTE3uDwOlmcjSlhLXa6WkQJQFVVINaXHq/xkQy1GSX853Gtxr3xkeQ5cZzAvqTNm7iTopzBq2pXL5DF/KilZN4qGAsThwqrkja+ioXiPqGlxHO9qEX7m0VitF+/vigBBko6G4eQ6/pZSflYAwIl1JLCeqvQu3y1mhRhfOnu9mwexKGM1XzNGMTVw+S0kCsnaJ6shzIpGlvz+AbqWjaJIw9jDLkpRrKsrLGKQebFCc8NAGlo8Q6nRLqqUUu4MFoKQgIqWus7tcalkAMiNF7JFJOzPU3Q5oHwqSAUwp3ZwOM+hnV80WPIreQxteJg20oHNB/0YUy2q4WnwQvzalZ2LWTZ+NtwqD8WiHvojijOU9D4o1kpS6Yeg4SQWJI4SVUlTuRaN1yEqQu/JEeFxUwJZ6a713SYrkxeZfQHH4kJWANNN5+l5q5mYUmKKzoIgRHTuiq7tphowPDPv1hLsFm0QHaJ8uxXdZYd4irjRleN1291ttFCbP7J9kVa5ms57CgMVDG4Tyd6gi3y/J4rFCylSQg74XFSalP2hS1sy/0PUwatNS23tc8wuXLNd1vcmA10vZgUa4sFdKnKjNRuTD0cqdkuVAf6DviM6EufynbWVO/j7Zzj58W3Ik2t+mTJEf5hw+T5td6BSr2TJIF6WeBjEX1q9Q20lpPFAW+0TxQ0SJP4kBrOPKlgnLtZ33WXJ6dUUyuryDTQBmBgvXSPLb6rwcD2g/ZW1AcSCUh+RilBEU8lXO31BfOaGVPqD6NhZh4S5wfFH4BTmahJa/z/ZlXfkqvut0aCgw6AAQQdEbUnJDBe3iH3bkB8IP9DS7X5OxzseIDT8dN/zCVdHpScghjl7lq/gSCSfsLqcTRBKlYT5R6ekiQ4ZbiEOG1YKmFMFxFeEoTv5g8iX8ClB5SRAvm/dlFYwAAAXzSURBVDnJ3UtEYZ6Eh+YKvz4FX1CxoTQhBCn2z+sYqhLq7TPITZBUnSCoODxBpY6bfkAi0wUdLnLVwVyuNhWHO6hpzHoei5eXfAPe4vOzsroBEpOYayIpqsSi5V4tFWJsG0APdaFce0gX7S3VKyQKZ1gqrfsqdnsvsmu6fCACQ9WiqNMUS+ZZ2b6EY5TIlaJJzCRyUMoA9dbVorPIoC6mCeI/VURCL+F2KnlFWN5HggGzJVRPoxUCqCioPO1VJthFXoUT11YlWWGLFJYeio5nEaBvgzrjZAeCyiyQtypCeUzKEi+U0p9bXkxU3yJmEINpgtfajgyIp1EQX/EmAolCqwrz8L5RXy7oI5sVM4SQm6u9ibftLfRa2GeDuTWTgcDPQHuDYofCbIMfMF9f2X+2k45QaYnEXULWLffRZ13z7Nm2Ik4LDxgc6rHj5l7kR5CBQ6Xgnro6US+Am16d6kWkfOmWWVF6j+EqCHVMi9ELfzbHuwtfbj+CHx8GwZw7J5deYawCllLsZR1BkTIshUfH1a8OTGNNPbIrhmio24w0P8TqClYimJ1vn8zzfu4O5/mFNE7BdIJ4IGUo6HYJXBhFmRoOUOwA3SBGpffo1+FtnUC+fUXOBMJmmLWsxDED5epfeD21jxFKC7lvBSVjXQcoxhWV5idhZWJ4DvL88vjywlUuPw+y4gUC+pCLkujPdCmAPMyqAhApfnNMR2gbUatxz3lS8nvdn7Cra2AqyTQ4tBj1JGUXrnJLD4mQepMR144zovuu3DOKuXp4luTKsMvPmaBl6B2lgCgECSiSTeF2qh9wpJhJ0/XieIRkkSItCiLFbpoikTL/2LpkxBS2Sls9eHIoGMSgTdLxW/gBM9yN3QV4hHTO6GEI84Qa9noddQCj26JnqB28ykYFFD6I9BBigRl18nlwlGbz/fDUqYTaYamoVFIcnImVUmb3adxA0BIm0sVUPGhGNy+TBCWFTyyE1wRrCpSKgJ40hV7JqqV80yNvU5Yazd37b+GXnlFmVQBS1BRJy1E7ORXjuQ5QFtER0oUtdGE3bhlGjTNlGP24My/DjAK/oLpGCkGJlnj5KLS3qRaB+u2RzE9Knx4+BQJM5Dfp5l/9KIxuWEcpLrnKT6krl6ZjgY5ZaTrGO0Q5IZOdEeQBtBtgH4Jbc+HNd2HDk048vET5BIqLkVtDvIQHUV3oJsNYUQ66I4TmuvQP5tVa34Llygm4IKdBYcQSVBZDP1Flupm1jx/G8dVZywTap6O8lXAQ+vvfVPIyLCCLT01KuK6Fsq63Vu0vGEgVZfVHWVaRjIUQZHmE/C8DMh1Vva/l2DaxlRmFZmXsT/kncfrUy/b94FJ7wECFEDGWLGLIUC4nJPRA6TJhtSq0UBe1+mUY/LHyUxJ+Lv5E3S+O6aOUuWyiyYekKpygrsQCXpQB/j/75RdxUmHKGzGIBWdKlgzvJTJvsUOURIcA0rfwk1dWtzq38vQjhD/bDvOd/+MiPP7jhC3bTyth47iU/qLIPmlrRNd01n3WeUaJfIz2i3TGa+hWj2t6ho7Dc5hOiuDTQgJKZZ9rVGlsAoMrGS6U56IZqqRATO8HLohRHFsg0vrbOtk5GAx6Hpv00n+4noJTTy2Fn0MwJXiqLKR4fUf6qQWCroJgVUJKD46Y0s32jHGzYXcxqxVvBcSD6gkad4HSCRKJzhQDohEyBO0TT/JsvfX+FxBcYgqDePBNaftvhrUiZDi5M9vsZuGOjOD21Tt19l7y8QsIduJLaDMhRUmxldO6FXBR1MQmsMOVefZPOsHY23c8Z/QbJNrhrU57T+irXbsmSUUEdw6r8kXsNZAjOF869tTzOqvfQbDDb18hulJprgnQWsmqoVpa1BKCHZut3NdfRDCDq92GCfG2H++LrpCM4INZqS78FxAc4gWfhjR6YG7gdB9f9IVkBNOtSt/5LyCYWgCXHfP+GCmK6T+HSdK6UCkDn+YsPVMSGPs8H7Tyfh9BgrGJ1bv8XhKs+0Sz/P5MLdbdLjVD989Ws2z+B//Z8P+15kEHMYi4HwAAAABJRU5ErkJggg=="
              alt="Dan Abramov"
            />

            <Link>
              {
              
              location.pathname === "/register" ? 
              
              null 
              
              :
               
               <>
                  <ButtonGroup gap="2" pl="5">
                    <Button
                      colorScheme="black"
                      variant="link"
                      fontWeight="bold"
                    >
                      ORDER
                    </Button>
                    <Button
                      colorScheme="black"
                      variant="link"
                      fontWeight="bold"
                    >
                      CARDS
                    </Button>
                    <Button
                      colorScheme="black"
                      variant="link"
                      fontWeight="bold"
                    >
                      GIFT
                    </Button>
                  </ButtonGroup>
                </>}
            </Link>
          </Box>
        </Flex>

        <Spacer />

        <Flex alignItems="center">
          {location.pathname === "/register" ? 
         
          null 
          :
           
           <>
              <ButtonGroup gap="2">
                <Button
                  leftIcon={<MdLocationPin />}
                  colorScheme="black"
                  variant="link"
                  fontWeight="bold"
                  pr="30"
                >
                  Find a store
                </Button>
                <Button
                  border="1px"
                  borderColor="black"
                  color="black"
                  borderRadius={25}
                >
                  Sign In
                </Button>
                <Button bg="black" color="white" borderRadius={25}>
                  Join now
                </Button>
              </ButtonGroup>
            </>
          }
        </Flex>
      </Flex>
    </>
  );
};

export default Navbar;
