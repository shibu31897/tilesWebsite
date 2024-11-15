```typescriptreact type="react" project="Premium Tiles Showroom" file="page.tsx"
[v0-no-op-code-block-prefix]import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, Mail, MapPin, Phone, Facebook, Instagram, PhoneIcon as WhatsApp } from 'lucide-react'

export default function PremiumTilesShowroom() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Luxury Tiles</h1>
          <nav className="hidden md:flex space-x-4">
            <a href="#home" className="text-gray-600 hover:text-gray-800">Home</a>
            <a href="#products" className="text-gray-600 hover:text-gray-800">Products</a>
            <a href="#about" className="text-gray-600 hover:text-gray-800">About</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-800">Contact</a>
          </nav>
          <Button variant="outline" className="md:hidden" onClick={toggleMenu}>
            Menu
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden bg-white py-2">
            <div className="container mx-auto px-4 flex flex-col space-y-2">
              <a href="#home" className="text-gray-600 hover:text-gray-800">Home</a>
              <a href="#products" className="text-gray-600 hover:text-gray-800">Products</a>
              <a href="#about" className="text-gray-600 hover:text-gray-800">About</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-800">Contact</a>
            </div>
          </nav>
        )}
      </header>

      <main>
        <section id="home" className="relative h-[60vh] bg-gray-900 flex items-center justify-center">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="/placeholder.svg?height=1080&width=1920"
              alt="Luxury tiles background"
              className="w-full h-full object-cover opacity-50"
            />
          </div>
          <div className="relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Elevate Your Space</h2>
            <p className="text-xl text-gray-200 mb-8">Discover our premium tile collection</p>
            <Button size="lg">
              Explore Now
            </Button>
          </div>
        </section>

        <section id="products" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Marble Elegance", description: "Timeless beauty for your floors" },
                { name: "Modern Mosaic", description: "Add a touch of artistry to your walls" },
                { name: "Rustic Wood Grain", description: "The warmth of wood, the durability of tile" },
                { name: "Sleek Porcelain", description: "Minimalist design for contemporary spaces" },
                { name: "Textured Slate", description: "Bring natural character indoors" },
                { name: "Geometric Patterns", description: "Bold statements for feature walls" },
              ].map((product, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="aspect-w-16 aspect-h-9 mb-4">
                      <img
                        src={`/placeholder.svg?height=720&width=1280&text=${product.name}`}
                        alt={product.name}
                        className="rounded-md object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-600">{product.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">About Our Showroom</h2>
              <p className="text-gray-600 mb-8">
                At Luxury Tiles, we curate the finest tiles from around the world. Our showroom offers an immersive
                experience where you can see and feel the quality of our products. With expert staff on hand, we'll
                help you find the perfect tiles for your project, whether you're renovating a home or designing a
                commercial space.
              </p>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <form className="space-y-4">
                  <Input placeholder="Your Name" />
                  <Input type="email" placeholder="Your Email" />
                  <Input placeholder="Subject" />
                  <Textarea placeholder="Your Message" />
                  <Button type="submit">Send Message</Button>
                </form>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-gray-600" />
                  <a href="https://goo.gl/maps/123" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    123 Tile Street, Cityville, State 12345
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-gray-600" />
                  <span>(123) 456-7890</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-gray-600" />
                  <a href="mailto:info@luxurytiles.com" className="hover:underline">info@luxurytiles.com</a>
                </div>
                <div className="flex items-center">
                  <WhatsApp className="h-5 w-5 mr-2 text-gray-600" />
                  <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    WhatsApp Us
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <a href="https://facebook.com/luxurytiles" target="_blank" rel="noopener noreferrer">
                    <Facebook className="h-6 w-6 text-gray-600 hover:text-gray-800" />
                  </a>
                  <a href="https://instagram.com/luxurytiles" target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-6 w-6 text-gray-600 hover:text-gray-800" />
                  </a>
                </div>
                <div className="aspect-w-16 aspect-h-9 mt-4">
                  <a href="https://goo.gl/maps/123" target="_blank" rel="noopener noreferrer">
                    <img
                      src="/placeholder.svg?height=450&width=800&text=Map"
                      alt="Map to our showroom"
                      className="rounded-md object-cover"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-4 mb-4">
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              <WhatsApp className="h-6 w-6 text-white hover:text-gray-300" />
            </a>
            <a href="https://facebook.com/luxurytiles" target="_blank" rel="noopener noreferrer">
              <Facebook className="h-6 w-6 text-white hover:text-gray-300" />
            </a>
            <a href="https://instagram.com/luxurytiles" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-6 w-6 text-white hover:text-gray-300" />
            </a>
            <a href="https://goo.gl/maps/123" target="_blank" rel="noopener noreferrer">
              <MapPin className="h-6 w-6 text-white hover:text-gray-300" />
            </a>
          </div>
          <p>&copy; 2023 Luxury Tiles. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}