### Day 1
1. Introduction to React Native
2. Introduction to ReactJS
3. Introduction to Javascript ES6
4. Setting up the React Native environment for android and ios
5. Resolving errors came across various machines

### Day 2
1. React Native Components
2. Practice on all React Native Components
3. React Native API's
4. Practice on React Native API's
5. Styling in React native
6. Flexbox
7. Task to create a calculator

### Day 3
1. Class Components vs Functional Components
2. State & Props in Functional Components
3. State & Props in Class Components
4. Conditional Rendering
5. Hooks - (useState & useEffect)

### Steps to release Android app -
1. Clean the build - ./gradlew clean
2. Add Jdk & create release keystore file with strong password - Lc21HVjv%^#A5,fd#3M?eh*@
3. Adding release signingConfig in app/build.gradle
4. Generate .aab file from android folder - ./gradlew bundleRelease || if you apk then ./gradlew assembleRelease
5. Pick the file from /android/app/build/outputs/bundle/release/app-release.aab || if apk then /android/app/build/outputs/apk/release/app-release.apk

### Steps to release IOS app -
1. Create Identifier
2. Create Certicates
3. Create Profiles
4. Integration of certificates and profiles in project
5. Clean the build project
6. Archiving the project which leads to upload of .ipa directly to Testflight or you can export it.