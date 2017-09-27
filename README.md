
# react-native-mokam

## Getting started

`$ npm install react-native-mokam --save`

### Mostly automatic installation

`$ react-native link react-native-mokam`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-mokam` and add `RNMokam.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNMokam.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNMokamPackage;` to the imports at the top of the file
  - Add `new RNMokamPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-mokam'
  	project(':react-native-mokam').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-mokam/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-mokam')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNMokam.sln` in `node_modules/react-native-mokam/windows/RNMokam.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Mokam.RNMokam;` to the usings at the top of the file
  - Add `new RNMokamPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNMokam from 'react-native-mokam';

// TODO: What to do with the module?
RNMokam;
```
  