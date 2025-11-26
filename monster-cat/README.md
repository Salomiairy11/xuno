
# Monstercat Album Carousel

 This project reproduces key UI and UX elements of the Monstercat website through clean, component-driven React architecture. The carousel is implemented using **React Slick** and features full-screen background transitions, per-slide metadata, progress bar animations, and customizable navigation arrows. A responsive sliding side menu and a dismissible cookie consent banner complete the UI. Typography for the project was sourced using browser DevTools to match Monstercat's styling more accurately.


## Project Screenshots
 
![cookieBanner](./src/assets/firstPage.PNG)  
![carousel](./src/assets/secondPage.PNG)
![sidemenu](./src/assets/thirdPage.PNG)

---

## Features

### **1. Fullscreen React Slick Carousel**
- Utilizes **react-slick** for smooth transitions, autoplay, and custom arrow rendering.  
- 100vh album sections with dynamic background images.  
- Synced progress bar animation tied to autoplay timing.  
- Custom metadata block: title, artist, category color, release date.  

### **2. Sliding Side Menu **
- Right-side overlay navigation implemented as a separate **SideMenu** component.  
- Expandable dropdown sections driven by local state.   
- Integrated social icon bar using React Icons.  
- Flexible layout suitable for insertion into any navbar component.

### **3. Cookie Consent Banner**
- Persistent bottom banner built as an independent component.  
- Simple state-based dismissal.  

### **4. Typography & Style Matching**
- Font families and layout metrics were identified via browser **DevTools** and re-implemented in custom CSS.


## Carousel Library Used
This project uses **React Slick**, a React wrapper around the popular *Slick Carousel* library.  
React Slick was chosen because it offers:
- Built-in autoplay, infinite scrolling, and custom navigation support  
- Smooth performance with large full-screen slides  
- A flexible API compatible with React’s component-driven structure  
- Easy customization for progress indicators, transitions, and slide metadata

These capabilities made it well-suited for recreating the animated, full-screen Monstercat album carousel.

---

## Design Compromises
While the UI closely mirrors the original layout, a few practical compromises were made:

- **Responsiveness is not fully optimized:**   
  Although the layout adapts to different screens, it is not 100% pixel-perfect at every breakpoint. As an AI intern with stronger experience in Python and AI-focused projects, frontend development is a relatively newer area for me. However, I did try to replicate the core carousel interactions, animations, and layout logic, while some fine-grained responsiveness details were approximated.


Despite these compromises, the project achieves a faithful and functional reconstruction of the original carousel behavior.

---

