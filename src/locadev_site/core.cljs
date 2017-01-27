(ns locadev-site.core
  (:require [reagent.core :as reagent :refer [atom]]))

(enable-console-print!)

;;(println "This text is printed from src/locadev-site/core.cljs. Go ahead and edit it and see reloading in action.")

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {}))

(def desc1 "Currently a Computer Science Major/Mathematical Science Minor at FIU. I also do some NodeJS Development for CruiseThinkLabs and manage a small group of programmers who work on web/mobile freelance projects. I will be interning at Target in Minneapolis this summer as a Software Engineer.")

(def desc2 "I love writting software in Java, Clojure, C, JS, and F#. I'm also very passionate about my Emacs/Linux Development Enviorment and during my free time I play basketball, workout, or participate in Hackathons across Florida!")



(defn header [name]
  [:header
   [:div {:class "container"}
    [:div {:class "col-lg-12"}
     [:img {:class "img-circle" :width "400px" :height "400px" :src "img/me.png" }]
     [:div {:class "intro-text"}
      [:span {:class "name"} name]
      [:hr {:class "star-light"}]
      [:ul {:class "list-inline"}
       [:li {:display "inline"} [:img {:class "img-responsive" :width "100px" :height "60px" :src "img/java.svg"}]]
       [:li {:display "inline"} [:img {:class "img-responsive" :width "100px" :height "60px" :src "img/nodejs_logo.png"}]]
       [:li {:display "inline"} [:img {:class "img-responsive" :width "100px" :height "60px" :src "img/clojure.jpg"}]]
       [:li {:display "inline"} [:img {:class "img-responsive" :width "100px" :height "60px" :src "img/lisp_logo.png"}]]
       [:li {:display "inline"} [:img {:class "img-responsive" :width "100px" :height "60px" :src "img/fsharp.png"}]]
       [:li {:display "inline"} [:img {:class "img-responsive" :width "100px" :height "60px" :src "img/c.png"}]]]
      ]]]])

;; (defn middle []
;;   [:div {:class "container"}
;;    [:div {:class "col-lg-4 col-lg-offset-4"}
;;     [:img {:src "img/giphy.gif"}]
;;     ]])


(defn about [desc1 desc2]
  [:section {:class "success", :id "about"}
   [:div {:class "container"}
    [:div {:class "row"}
     [:div {:class "col-lg-12 text-center"}
      [:h2 "About"]
      [:hr {:class "star-light"}]]]
    [:div {:class "row"}
     [:div {:class "col-lg-12 text-center"}
      [:div {:class "col-lg-4 col-lg-offset-4"}
       [:p {:align "justify"} desc1 ] 
       [:p {:align "justify"} desc2 ]]]]]
   ])


(defn compositoner []
  [:div
   (header "Lester Ramos")
   ;;(middle)
   (about desc1 desc2)])


(reagent/render-component [compositoner]
                          (. js/document (getElementById "app")))

;; (defn on-js-reload []
;;   ;; optionally touch your app-state to force rerendering depending on
;;   ;; your application
;;   ;; (swap! app-state update-in [:__figwheel_counter] inc)
;; )
