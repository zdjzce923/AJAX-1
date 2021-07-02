// 1. 请求CSS
getCSS.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/style.css')
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const style = document.createElement('style')
        style.innerHTML = request.response
        document.head.appendChild(style)
      } else {
        alert('CSS文件请求失败')
      }
    }
  }
  request.send()
}

// 2. 请求js文件
getJS.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/2.js')
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
      }
    }
  }
  request.onerror = () => {
    alert('JS文件请求失败')
  }
  request.send()
}

// 3. 请求html文件
getHTML.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/3.html')
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const div = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)
      }
    }
  }
  request.onerror = () => {
    alert('HTML文件请求失败')
  }
  request.send()
}

// 4. 请求XMl
getXML.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/4.xml')
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const dom = request.responseXML
      const text = dom.getElementsByTagName('warning')[0].textContent
      console.log(text.trim())
    }
  }
  request.onerror = () => {
    alert('XML文件请求失败')
  }
  request.send()
}

// 5. 请求JSON
getJSON.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/5.json')
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      // JSON里面的数据不一定支持JS的数据 例如函数。 并且不一定是对应的数据类型
      console.log(typeof request.response)
      console.log(request.response)
      let bool = JSON.parse(request.response)
      console.log(typeof bool)
      console.log(bool)
    }
  }
  request.onerror = () => {
    alert('JSON文件请求失败')
  }
  request.send()
}

// 6. 请求分页
let n = 1
getPage.onclick = () => {
  const request = new XMLHttpRequest()
  if (n + 1 <= 3) {
    request.open('GET', `/page${n + 1}`)
    request.onreadystatechange = () => {
      if (request.readyState === 4 && request.status === 200) {
        const arr = JSON.parse(request.response)
        arr.forEach(item => {
          const li = document.createElement('li')
          li.textContent = item.id
          xxx.appendChild(li)
        })
        n += 1
      }
    }
    request.onerror = () => {
      alert('分页文件请求失败')
    }
    request.send()
  } else {
    console.log('没有更多了')
  }
}
