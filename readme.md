<br/>
<p align="center">
  <a href="https://github.com/farhanrizqi/RecipeMobileV1">
    <img src="https://res.cloudinary.com/ddrecezrk/image/upload/v1696753518/recipe/readme/logoMamaRecipe_pfwq27.png" alt="Logo" width="150" height="180">
  </a>

  <h3 align="center">Mama Recipe Mobile</h3>

  <p align="center">
    Discover your taste.
    <br/>
    <br/>
    <a href="https://github.com/farhanrizqi/RecipeMobileV1"><strong>Explore the docs »</strong></a>
    <br/>
    <br/>
    <a href="https://github.com/farhanrizqi/RecipeMobileV1">View Demo</a>
    .
    <a href="https://github.com/farhanrizqi/RecipeMobileV1/issues">Report Bug</a>
    .
    <a href="https://github.com/farhanrizqi/RecipeMobileV1/issues">Request Feature</a>
  </p>
</p>

## Table Of Contents

- [About the Project](#about-the-project)
- [Built With](#built-with)
- [Installation](#installation)
- [APK](#instal-apk)
- [Contributing](#contributing)
- [Related Project](#related-project)
- [Contact](#contact)

## About The Project

<p align="center">
  <b>
    Mama Recipe
  </b>
   is a responsive web-based application that can be accessed on desktop or mobile devices. The app aims for users to find what recipes they want or share their recipes food to the world.

</p>

## Built With

This app was built with some technologies below:

- React Native
- Axios
- Redux

## Installation

If you want to run this project locally, we recommend you configure the back-end first before configuring this repo front-end.

- Clone the Repo

```
  git clone https://github.com/farhanrizqi/RecipeMobileV1.git
```

- Go To Folder Repo

```
  cd RecipeMobileV1
```

- Install Module

```
  npm install
```

- Check device availability

```
adb devices
```

- Port

```
adb reverse tcp:8081 tcp:8081
```

-Using SCRCPY

See the documentation for SCRPCPY here: https://github.com/Genymobile/scrcpy

-How to use SCRPCPY

```
scrcpy
```

- Start the Android

```
  npx react-native run android
```

## Instal APK

To get the APK, you can download it at the link below. When the APP is first run, please allow permission for your camera access and file manager. And when you first run the APP it will force close several times because there is a slight error in the axios. However, if the APP has been run frequently, it will run normally and there will be no more problems.

Link download APK :
https://drive.google.com/drive/folders/1c5sSvRFr8IwnhMs3Vm2DmyVXY76Xl5zY?usp=sharing

## Screenshot

|                                                                                                                                                           Start Screen                                                                                                                                                           |                                                                                                                                                    Registration Screen                                                                                                                                                     |                                                                                                                                                        Login Screen                                                                                                                                                        |                                                                                                                                                       Initial Screen                                                                                                                                                        |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| [![startscreen.png](https://res.cloudinary.com/dcpi3m2up/image/upload/v1695713736/samples/Recipe/mobile/Screenshot_2023-09-19-19-57-46-912_com.recipemobilev1_ciw9pg.jpg)](https://res.cloudinary.com/dcpi3m2up/image/upload/v1695713736/samples/Recipe/mobile/Screenshot_2023-09-19-19-57-46-912_com.recipemobilev1_ciw9pg.jpg) | [![regis.png](https://res.cloudinary.com/dcpi3m2up/image/upload/v1695713723/samples/Recipe/mobile/Screenshot_2023-09-19-19-57-56-941_com.recipemobilev1_kwhgrn.jpg)](https://res.cloudinary.com/dcpi3m2up/image/upload/v1695713723/samples/Recipe/mobile/Screenshot_2023-09-19-19-57-56-941_com.recipemobilev1_kwhgrn.jpg) | [![login.png](https://res.cloudinary.com/dcpi3m2up/image/upload/v1695713723/samples/Recipe/mobile/Screenshot_2023-09-19-19-57-52-155_com.recipemobilev1_wibqpb.jpg)](https://res.cloudinary.com/dcpi3m2up/image/upload/v1695713723/samples/Recipe/mobile/Screenshot_2023-09-19-19-57-52-155_com.recipemobilev1_wibqpb.jpg) | [![splash.png](https://res.cloudinary.com/dcpi3m2up/image/upload/v1695713743/samples/Recipe/mobile/Screenshot_2023-09-19-20-00-42-659_com.recipemobilev1_spcrsr.jpg)](https://res.cloudinary.com/dcpi3m2up/image/upload/v1695713743/samples/Recipe/mobile/Screenshot_2023-09-19-20-00-42-659_com.recipemobilev1_spcrsr.jpg) |

|                                                                                                                                                        Home Screen                                                                                                                                                        |                                                                                                                                                        Search Screen                                                                                                                                                        |                                                                                                                                                     Add Menu Screen                                                                                                                                                      |                                                                                                                                                     Update Menu Screen                                                                                                                                                      |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| [![home.png](https://res.cloudinary.com/dcpi3m2up/image/upload/v1695713731/samples/Recipe/mobile/Screenshot_2023-09-19-19-58-23-430_com.recipemobilev1_yb9mbr.jpg)](https://res.cloudinary.com/dcpi3m2up/image/upload/v1695713731/samples/Recipe/mobile/Screenshot_2023-09-19-19-58-23-430_com.recipemobilev1_yb9mbr.jpg) | [![search.png](https://res.cloudinary.com/dcpi3m2up/image/upload/v1695713724/samples/Recipe/mobile/Screenshot_2023-09-19-19-58-34-999_com.recipemobilev1_ugibxf.jpg)](https://res.cloudinary.com/dcpi3m2up/image/upload/v1695713724/samples/Recipe/mobile/Screenshot_2023-09-19-19-58-34-999_com.recipemobilev1_ugibxf.jpg) | [![add.png](https://res.cloudinary.com/dcpi3m2up/image/upload/v1695713720/samples/Recipe/mobile/Screenshot_2023-09-19-19-58-41-619_com.recipemobilev1_bb5hns.jpg)](https://res.cloudinary.com/dcpi3m2up/image/upload/v1695713720/samples/Recipe/mobile/Screenshot_2023-09-19-19-58-41-619_com.recipemobilev1_bb5hns.jpg) | [![update.png](https://res.cloudinary.com/dcpi3m2up/image/upload/v1695713734/samples/Recipe/mobile/Screenshot_2023-09-19-19-59-09-480_com.recipemobilev1_wtyi2z.jpg)](https://res.cloudinary.com/dcpi3m2up/image/upload/v1695713734/samples/Recipe/mobile/Screenshot_2023-09-19-19-59-09-480_com.recipemobilev1_wtyi2z.jpg) |

|                                                                                                                                                      Detail Menu Screen                                                                                                                                                      |                                                                                                                                                        Profile Screen                                                                                                                                                        |                                                                                                                                                       My Recipe Screen                                                                                                                                                        |                                                                                                                                                      Detail Profile Screen                                                                                                                                                      |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| [![detmenu.png](https://res.cloudinary.com/dcpi3m2up/image/upload/v1695713739/samples/Recipe/mobile/Screenshot_2023-09-19-19-59-46-523_com.recipemobilev1_cjrwxo.jpg)](https://res.cloudinary.com/dcpi3m2up/image/upload/v1695713739/samples/Recipe/mobile/Screenshot_2023-09-19-19-59-46-523_com.recipemobilev1_cjrwxo.jpg) | [![profile.png](https://res.cloudinary.com/dcpi3m2up/image/upload/v1695713724/samples/Recipe/mobile/Screenshot_2023-09-19-19-58-46-175_com.recipemobilev1_pygjjy.jpg)](https://res.cloudinary.com/dcpi3m2up/image/upload/v1695713724/samples/Recipe/mobile/Screenshot_2023-09-19-19-58-46-175_com.recipemobilev1_pygjjy.jpg) | [![myrecipe.png](https://res.cloudinary.com/dcpi3m2up/image/upload/v1695713726/samples/Recipe/mobile/Screenshot_2023-09-19-19-58-59-984_com.recipemobilev1_uyfv8q.jpg)](https://res.cloudinary.com/dcpi3m2up/image/upload/v1695713726/samples/Recipe/mobile/Screenshot_2023-09-19-19-58-59-984_com.recipemobilev1_uyfv8q.jpg) | [![detprofile.png](https://res.cloudinary.com/dcpi3m2up/image/upload/v1695713726/samples/Recipe/mobile/Screenshot_2023-09-19-19-58-52-442_com.recipemobilev1_shwcnl.jpg)](https://res.cloudinary.com/dcpi3m2up/image/upload/v1695713726/samples/Recipe/mobile/Screenshot_2023-09-19-19-58-52-442_com.recipemobilev1_shwcnl.jpg) |

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Related Project

:rocket: [`Backend Mama Recipe`](https://github.com/farhanrizqi/recipev2)

:rocket: [`Web Mama Recipe`](https://github.com/farhanrizqi/RecipeWEBV3)

<!-- :rocket: [`Install Mama Recipe Mobile APK`](https://drive.google.com/drive/folders/1Z31nBEuJ2Tj0zEAMYCUsL7hJyQfuGmIy) -->

## Contact

- Email : [`muhammadariffebriansyah@gmail.com`](mailto:farhanrizqi.am@gmail.com)

- LinkedIn : [`/in/frzq/`](https://www.linkedin.com/in/frzq/)

- GitHub : [`farhanrizqi`](https://github.com/farhanrizqi)
