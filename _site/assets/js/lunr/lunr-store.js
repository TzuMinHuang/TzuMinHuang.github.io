var store = [{
        "title": "Java 8",
        "excerpt":" ","categories": ["blog"],
        "tags": ["java"],
        "url": "/blog/java8/",
        "teaser": null
      },{
        "title": "Java8 到 Java11",
        "excerpt":" ","categories": ["blog"],
        "tags": ["Jekyll","update"],
        "url": "/blog/java8_to_Java11/",
        "teaser": null
      },{
        "title": "資安學習心得｜網頁資訊安全需知",
        "excerpt":" ","categories": ["Security"],
        "tags": ["security"],
        "url": "/security/web-security-1/",
        "teaser": null
      },{
        "title": "資安學習心得｜後端API資安需知大全",
        "excerpt":" ","categories": ["Security"],
        "tags": ["security"],
        "url": "/security/web-security-2/",
        "teaser": null
      },{
        "title": "資安學習心得｜打造具認證驗證功能的 Spring Gateway 防線",
        "excerpt":" ","categories": ["Security"],
        "tags": ["security","spring","java"],
        "url": "/security/web-security-3/",
        "teaser": null
      },{
        "title": "從零打造一個智慧機器人：我的機器人學習之旅",
        "excerpt":"最近在閱讀《自然語言處理最佳實務》這本書，裡面有一章在講解「客服機器人的應用場景與技術架構」，看完之後我心裡冒出一個念頭：「不如自己來實作一套看看？」這不只是對書中概念的實驗，也是一場實戰練習。 我設定的第一個目標是打造一個具備基本功能的客服對話系統，包含： FAQ 查詢回答 多輪對話處理 支援轉接真人客服 技術上，我採用了自己熟悉的技術棧： Spring Boot 作為主架構 RabbitMQ 負責模組解耦與訊息分發 PostgreSQL 儲存對話紀錄與知識資料 Docker 協助環境部署與管理 Redis、html、css、javascript… Rasa 第一版很快就做出來了，但……效果並不如我預期的好。 做完第一版，我學到什麼？ 雖然功能完成了，但整體對話體驗不夠自然、有些僵硬，也難以應對複雜或模糊的問題。這讓我開始認真思考一件事： 「客服機器人，到底該怎麼對話？」 在這過程中，我逐漸意識到，客服對話其實就是模仿人與人之間的溝通流程： 使用者一句、系統一句 使用者提出意圖、系統嘗試理解並給出回應 解決一個問題，再進入下一個問題 乍看之下很簡單，但實際情況卻複雜得多。使用者有可能： 話題跳來跳去 一次輸入多個問題 無法清楚描述問題本身 中途修改原本的問題 因此，我重新審視整體架構，決定設計第二版，一個更接近「人類對話邏輯」的系統。 我眼中的客服系統核心邏輯 要讓一個對話機器人有「對話能力」，我認為需要具備以下幾個核心模組： 1. 意圖辨識（Intent Detection） 我們要能辨識使用者是要查詢資訊、投訴、詢問訂單進度，還是只是說「你好」。不同意圖決定了回應策略與流程走向。 2. 對話狀態管理（State Management） 對話不是 stateless 的，系統需要知道現在對話進行到哪，例如： 使用者剛提問，還沒回覆 等待使用者補充資料 進入詢問流程中 這可以用有限狀態機或上下文物件來管理。 3. 回應策略（Response...","categories": ["Chatbot"],
        "tags": ["chat","chatbot","nlp"],
        "url": "/chatbot/web-chat-1/",
        "teaser": null
      },{
        "title": "從實作出發，我重新思考客服機器人的本質與設計",
        "excerpt":" ","categories": ["Blog"],
        "tags": ["chat","chatbot","nlp"],
        "url": "/blog/web-chat-2/",
        "teaser": null
      },{
        "title": "NLP × 電商 Chatbot 混合應用學習筆記",
        "excerpt":" ","categories": ["Blog"],
        "tags": ["chat","chatbot","nlp"],
        "url": "/blog/web-chat-3/",
        "teaser": null
      },{
        "title": "Api-code-template",
        "excerpt":" ","categories": [],
        "tags": [],
        "url": "/projects/1-Api-code-template/",
        "teaser": null
      },{
        "title": "My Gateway App",
        "excerpt":"這裡可以寫更詳細的介紹，包括圖片、技術堆疊、GitHub 連結等等。  ","categories": [],
        "tags": ["SpringBoot","Chatbot","RabbitMQ"],
        "url": "/projects/2-gateway/",
        "teaser": null
      },{
        "title": "My Chatbot App",
        "excerpt":"這裡可以寫更詳細的介紹，包括圖片、技術堆疊、GitHub 連結等等。  ","categories": [],
        "tags": ["SpringBoot","Chatbot","RabbitMQ"],
        "url": "/projects/3-chatbot/",
        "teaser": null
      }]
